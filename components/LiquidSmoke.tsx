"use client";

import React, { useEffect, useRef } from "react";

interface LiquidSmokeProps {
  className?: string;
  colors?: string[];
  backgroundColor?: string;
  speed?: number;
  scale?: number;
  warp?: number;
  rise?: number;
  swirl?: number;
  contrast?: number;
  softness?: number;
  mouseStrength?: number;
  bgAlpha?: number;
}

const VERTEX_SHADER = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;
varying vec2 v_uv;
uniform vec2 u_res;
uniform float u_time, u_speed, u_scale, u_warp, u_rise, u_swirl, u_contrast, u_softness, u_bgalpha, u_colorCount;
uniform vec2 u_mouse;
uniform float u_mouseAct, u_mouseStr;
uniform vec3 u_bg, u_c0, u_c1, u_c2, u_c3;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.07;
    a *= 0.5;
  }
  return v;
}

vec3 pick(float i) {
  float k = mod(i, u_colorCount);
  if (k < 0.5) return u_c0;
  if (k < 1.5) return u_c1;
  if (k < 2.5) return u_c2;
  return u_c3;
}

void main() {
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 uv = vec2(v_uv.x * aspect, v_uv.y);
  float t = u_time * u_speed;

  // Cursor stir: rotational displacement with Gaussian falloff
  float mAmt = u_mouseStr * u_mouseAct;
  vec2 mrel = uv - u_mouse;
  float mr2 = dot(mrel, mrel);
  float stir = exp(-mr2 * 7.0) * mAmt;
  uv += (vec2(-mrel.y, mrel.x) * 1.7 + mrel * 0.5) * stir * 0.9;

  // Swirl in screen space around visible center, then apply rise scroll
  vec2 sp = uv * u_scale;
  vec2 c = vec2(0.5 * aspect, 0.5) * u_scale;
  vec2 rel = sp - c;
  float ang = u_swirl * 0.6 * sin(t * 0.3) * length(rel);
  sp = c + mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * rel;
  vec2 p = sp + vec2(0.0, -t * u_rise * 0.4);

  // Double domain warp for authentic volumetric fluid smoke curls
  vec2 q = vec2(fbm(p + vec2(t * 0.15, 0.0)), fbm(p + vec2(5.2, 1.3) - t * 0.1));
  vec2 r = vec2(fbm(p + u_warp * 2.0 * q + vec2(1.7, 9.2)), fbm(p + u_warp * 2.0 * q + vec2(8.3, 2.8)));
  float v = fbm(p + u_warp * 2.2 * r);
  v = pow(smoothstep(1.0 - u_softness, 1.0, v + 0.35), u_contrast);

  // Moving cursor thins the smoke slightly at the pointer core
  v *= 1.0 - 0.35 * exp(-mr2 * 12.0) * mAmt;

  vec3 smoke = mix(pick(0.0), pick(1.0), clamp(q.x + r.y * 0.5, 0.0, 1.0));
  vec3 col = mix(u_bg, smoke, v);
  float alpha = clamp(max(u_bgalpha, v), 0.0, 1.0);

  gl_FragColor = vec4(col, alpha);
}
`;

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const num = parseInt(full, 16);
  return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255];
}

export default function LiquidSmoke({
  className = "absolute inset-0 pointer-events-none",
  colors = ["#475569", "#94a3b8", "#334155"],
  backgroundColor = "#0b0f19",
  speed = 0.35,
  scale = 1.4,
  warp = 0.85,
  rise = 0.4,
  swirl = 0.5,
  contrast = 1.25,
  softness = 0.72,
  mouseStrength = 0.75,
  bgAlpha = 0.95,
}: LiquidSmokeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const gl =
      canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: false }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) return;

    function compileShader(type: number, src: string) {
      const s = gl!.createShader(type);
      if (!s) return null;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.warn("LiquidSmoke shader error:", gl!.getShaderInfoLog(s));
        return null;
      }
      return s;
    }

    const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn("LiquidSmoke link error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Full screen quad
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Uniform locations map
    const uniformLocs: Record<string, WebGLUniformLocation | null> = {};
    const getU = (name: string) => {
      if (uniformLocs[name] === undefined) {
        uniformLocs[name] = gl.getUniformLocation(program, name);
      }
      return uniformLocs[name];
    };

    // Set static / parameter uniforms
    const setColors = () => {
      const activeColors = colors.length > 0 ? colors : ["#475569", "#94a3b8"];
      gl.uniform1f(getU("u_colorCount"), activeColors.length);

      ["u_c0", "u_c1", "u_c2", "u_c3"].forEach((uName, idx) => {
        const hex = activeColors[Math.min(idx, activeColors.length - 1)];
        const [r, g, b] = hexToRgb(hex);
        gl.uniform3f(getU(uName), r, g, b);
      });

      const [br, bgVal, bb] = hexToRgb(backgroundColor);
      gl.uniform3f(getU("u_bg"), br, bgVal, bb);
    };

    setColors();
    gl.uniform1f(getU("u_speed"), speed);
    gl.uniform1f(getU("u_scale"), scale);
    gl.uniform1f(getU("u_warp"), warp);
    gl.uniform1f(getU("u_rise"), rise);
    gl.uniform1f(getU("u_swirl"), swirl);
    gl.uniform1f(getU("u_contrast"), contrast);
    gl.uniform1f(getU("u_softness"), softness);
    gl.uniform1f(getU("u_mouseStr"), mouseStrength);
    gl.uniform1f(getU("u_bgalpha"), bgAlpha);

    // Dynamic mouse tracking & smooth lerp
    let mouseTargetX = 0.5;
    let mouseTargetY = 0.5;
    let mouseCurrentX = 0.5;
    let mouseCurrentY = 0.5;
    let mouseActivity = 0;
    let lastMouseMoveTime = -1e9;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) return;
      mouseTargetX = (e.clientX - rect.left) / rect.width;
      mouseTargetY = (e.clientY - rect.top) / rect.height;
      lastMouseMoveTime = performance.now();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // Responsive Canvas Resize
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.max(1, Math.round(container.clientWidth * dpr));
      const h = Math.max(1, Math.round(container.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
        gl.uniform2f(getU("u_res"), w, h);
      }
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // Animation & Intersection loop
    let isVisible = true;
    let raf = 0;
    const startTime = performance.now();

    const io = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !raf) {
        raf = requestAnimationFrame(loop);
      }
    });
    io.observe(container);

    const loop = () => {
      if (!isVisible) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(loop);

      const now = performance.now();
      const elapsed = (now - startTime) / 1000;

      // Lerp mouse coordinates smoothly
      mouseCurrentX += (mouseTargetX - mouseCurrentX) * 0.07;
      mouseCurrentY += (mouseTargetY - mouseCurrentY) * 0.07;

      const targetActivity = now - lastMouseMoveTime < 2500 ? 1 : 0;
      mouseActivity += (targetActivity - mouseActivity) * 0.045;

      const aspect = container.clientWidth / Math.max(container.clientHeight, 1);
      gl.uniform2f(getU("u_mouse"), mouseCurrentX * aspect, 1.0 - mouseCurrentY);
      gl.uniform1f(getU("u_mouseAct"), mouseActivity);
      gl.uniform1f(getU("u_time"), elapsed);

      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", handlePointerMove);
      ro.disconnect();
      io.disconnect();
      const ext = gl.getExtension("WEBGL_lose_context");
      ext?.loseContext();
    };
  }, [
    colors,
    backgroundColor,
    speed,
    scale,
    warp,
    rise,
    swirl,
    contrast,
    softness,
    mouseStrength,
    bgAlpha,
  ]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
      style={{ overflow: "hidden" }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block absolute inset-0"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
