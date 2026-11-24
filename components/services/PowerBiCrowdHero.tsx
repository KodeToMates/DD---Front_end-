'use client';

/* 
 * Power BI Crowd Signal Hero
 * Real-time business intelligence hero: a crowd of enterprise stakeholders walks past,
 * a business data bottleneck pops up, an automated Power Query / DAX pipeline triggers,
 * a real-time BI scorecard flies along an arc, and the verified operational result returns.
 * Adapted to DataLive Intelligence website brand system.
 */

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { animate, stagger } from 'motion';
import { ArrowRight, ChevronRight, Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/data/contact';

/* Open Peeps (CC0) character SVG crowd served from Supabase public CDN */
const ASSET = (id: string) =>
  `https://wbarljqnwyapytycfglm.supabase.co/storage/v1/object/public/canvas_assets/c5b084d7-d978-4942-8775-19c92226e9c1/${id}.svg`;

const PEEPS = [
  '381d6479-f5b5-49ca-82f3-474c87c62996',
  '9df39fca-20db-4273-bf7e-488d04a13321',
  '3c8ee64a-67b3-4a2c-84d5-c665c725e7c5',
  '3ccafa92-f479-4885-a6fb-0af92993b7f6',
  '735686b6-9bd5-4ab1-9fe6-59c50b5e2eb0',
  '3f775475-8920-4f55-b7c1-16bf192a0b1f',
  'b56ceaf5-7fb3-40a2-bb1a-d41c547c71ca',
  '4bd0452d-b321-4488-b57a-0c52dc73ceb1',
  '5d3553c5-a46f-4238-bcb5-02ff60b0f907',
  '6669baf9-e6d8-476b-abd4-e3d52517aee8',
  '2a2fffcb-9e4e-4610-a2ec-c2c334e29001',
  '742a5c0b-c77f-4ab3-96eb-dbca387f5ff8',
  'da0b3073-d6fd-46d2-a1f6-747fbfedf2b1',
  'd9738cd5-9685-47c4-9eab-e004c4d83776',
  '706557e0-8408-4b07-bcab-2968cf4c493e',
  '45a054f3-181d-4746-983d-12be5078e2f0',
  '38ab3806-883c-4868-9198-a1db96941d06',
  '6a165ed6-e6e5-4695-9aff-bd2cd51c4b1e',
  'c5d7e55b-3899-4297-8632-a5f6a186ac05',
  '25b3470e-e046-42f5-9b36-591d37e72d28',
].map(ASSET);

export type BusinessSignal = {
  tag: string;
  tc: 'caution' | 'route' | 'plain';
  signal: string;
  lab: string;
  line: string;
  rtag: string;
  rc: 'caution' | 'route' | 'plain';
  reply: string;
};

export const POWER_BI_SIGNALS: BusinessSignal[] = [
  {
    tag: 'Tally Delay',
    tc: 'caution',
    signal: 'Finance takes 12 days to close monthly ledgers',
    lab: 'Power Query · ETL',
    line: 'Deploying direct Tally ODBC gateway to pull live vouchers —',
    rtag: 'Automated',
    rc: 'route',
    reply: 'CFO: Month-end close completed in 4 hours on mobile',
  },
  {
    tag: 'Debtor Alert',
    tc: 'route',
    signal: '₹2.8 Cr overdue > 45 days in receivables',
    lab: 'DAX · Star Schema',
    line: 'Generating real-time debtor aging & automated WhatsApp alerts —',
    rtag: 'Cash Inflow',
    rc: 'caution',
    reply: 'Collections accelerated by 34% within first 14 days',
  },
  {
    tag: 'Plant OEE',
    tc: 'caution',
    signal: 'Furnace downtime causing 18% dispatch lag',
    lab: 'SQL · Live Stream',
    line: 'Ingesting shift metrics into automated executive dashboard —',
    rtag: 'Optimal',
    rc: 'route',
    reply: 'Plant Director: OEE restored to 92% benchmark',
  },
  {
    tag: 'Inventory',
    tc: 'route',
    signal: 'Raw material buffer below 48-hour safety threshold',
    lab: 'Gateway Refresh',
    line: 'Calculating dynamic reorder points across 5 warehouse branches —',
    rtag: 'Protected',
    rc: 'plain',
    reply: 'Safety stock buffer maintained, zero production downtime',
  },
];

const CSS = `
.pbi-rch {
  --base: #F8FAFC;
  --c1: #BAE6FD;
  --c2: #38BDF8;
  --c3: #E0F2FE;
  --c4: #F0F9FF;
  --ac: 2, 132, 199;
  --route2: #0369A1;
  --tint: #E0F2FE;
  --rline: #BAE6FD;
  --route: rgb(var(--ac));
  --panel: #FFFFFF;
  --ink: #101828;
  --ink2: #344054;
  --muted: #475467;
}
.pbi-rch, .pbi-rch * { box-sizing: border-box; }
.pbi-rch {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 880px;
  overflow: hidden;
  background: var(--base);
  color: var(--ink);
  font-family: var(--font-outfit, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  -webkit-font-smoothing: antialiased;
}
.pbi-rch .bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: var(--base);
}
.pbi-rch .bg i {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.22;
  will-change: transform;
}
.pbi-rch .b1 { left: -12%; top: 46%; width: 56%; height: 82%; background: var(--c1); animation: pbi-d1 24s ease-in-out infinite alternate; }
.pbi-rch .b2 { left: 26%; top: 56%; width: 52%; height: 74%; background: var(--c2); animation: pbi-d2 28s ease-in-out infinite alternate; }
.pbi-rch .b3 { right: -14%; top: 40%; width: 54%; height: 86%; background: var(--c3); animation: pbi-d3 26s ease-in-out infinite alternate; }
.pbi-rch .b4 { left: 50%; top: 50%; width: 26%; height: 36%; background: var(--c4); animation: pbi-d2 20s ease-in-out infinite alternate-reverse; }
.pbi-rch .dome {
  position: absolute;
  left: -28%;
  right: -28%;
  top: -52%;
  height: 112%;
  border-radius: 50%;
  background: radial-gradient(closest-side, #ffffff 64%, rgba(255, 255, 255, 0.88) 78%, rgba(255, 255, 255, 0) 100%);
}
@keyframes pbi-d1 { to { transform: translate(9%, -7%) scale(1.08); } }
@keyframes pbi-d2 { to { transform: translate(-8%, -5%) scale(1.1); } }
@keyframes pbi-d3 { to { transform: translate(-7%, 6%) scale(1.06); } }
.pbi-rch .fx {
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.pbi-rch .hero {
  position: absolute;
  z-index: 6;
  left: 0;
  right: 0;
  top: 36px;
  text-align: center;
}
.pbi-rch .kick {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--route2);
  font-family: var(--font-space, monospace);
  background: #E0F2FE;
  padding: 4px 14px;
  border-radius: 999px;
  border: 1px solid #BAE6FD;
}
.pbi-rch .kick i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--route);
  box-shadow: 0 0 0 4px rgba(var(--ac), 0.2);
}
.pbi-rch h1 {
  margin: 16px 0 0;
  font-family: var(--font-space, sans-serif);
  font-size: clamp(34px, 5.2vw, 68px);
  line-height: 1.08;
  letter-spacing: -0.035em;
  font-weight: 700;
  color: var(--ink);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
}
.pbi-rch h1 .w { display: inline-block; }
.pbi-rch h1 em { font-style: normal; color: var(--route); }
.pbi-rch .ph { position: relative; white-space: nowrap; }
.pbi-rch .ph::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: -0.04em;
  right: -0.04em;
  bottom: 0.08em;
  height: 0.3em;
  border-radius: 0.08em;
  background: #BAE6FD;
  transform: scaleX(0);
  transform-origin: 0 50%;
  opacity: 0;
}
.pbi-rch .ph.hit::after { animation: pbi-mark 1.8s cubic-bezier(0.5, 0, 0.2, 1); }
.pbi-rch .ph.lit::after { transform: none; opacity: 1; }
@keyframes pbi-mark {
  0% { transform: scaleX(0); opacity: 1; }
  28% { transform: scaleX(1); opacity: 1; }
  76% { transform: scaleX(1); opacity: 1; }
  100% { transform: scaleX(1); opacity: 0; }
}
.pbi-rch .lead {
  max-width: 820px;
  margin: 18px auto 0;
  font-size: 16.5px;
  line-height: 1.6;
  color: var(--muted);
  padding: 0 16px;
}
.pbi-rch .ctas {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
}
.pbi-rch .beacon {
  position: absolute;
  z-index: 5;
  left: 50%;
  top: 418px;
  width: 68px;
  height: 68px;
  margin-left: -34px;
}
.pbi-rch .btile {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #FFFFFF;
  border: 2px solid #BAE6FD;
  display: grid;
  place-items: center;
  box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.7), 0 0 0 8px rgba(var(--ac), 0.18), 0 18px 36px -10px rgba(var(--ac), 0.55);
}
.pbi-rch .compose {
  position: absolute;
  z-index: 5;
  left: 50%;
  top: 498px;
  pointer-events: none;
}
.pbi-rch .cen {
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-50%);
  width: max-content;
}
.pbi-rch .cbox {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 14px 0 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #BAE6FD;
  box-shadow: 0 14px 30px -14px rgba(2, 132, 199, 0.35);
  font-size: 13px;
  white-space: nowrap;
  transform: scale(0);
  transform-origin: 50% 0;
}
.pbi-rch .cbox .lab {
  height: 22px;
  padding: 0 8px;
  border-radius: 999px;
  background: var(--tint);
  color: var(--route2);
  font: 700 11px/22px var(--font-space, monospace);
}
.pbi-rch .caret {
  width: 1.5px;
  height: 14px;
  margin-left: -6px;
  background: var(--route);
  animation: pbi-blink 1s steps(1) infinite;
}
@keyframes pbi-blink { 50% { opacity: 0; } }
.pbi-rch .crowd {
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  top: 530px;
  height: 350px;
  pointer-events: none;
}
.pbi-rch .pw { position: absolute; left: 0; }
.pbi-rch .pe { width: 100%; height: 100%; will-change: transform; transform-origin: 50% 88%; }
.pbi-rch .hp { position: relative; width: 100%; height: 100%; }
.pbi-rch .pw img {
  display: block;
  width: 100%;
  height: 100%;
  transition: filter 0.45s, transform 0.5s cubic-bezier(0.3, 1.6, 0.5, 1);
}
.pbi-rch .ok {
  position: absolute;
  left: 64%;
  top: 8%;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #12B76A;
  box-shadow: 0 0 0 2.5px #fff, 0 6px 12px -4px rgba(18, 183, 106, 0.6);
  display: grid;
  place-items: center;
  transform: scale(0);
  transition: transform 0.45s cubic-bezier(0.3, 1.7, 0.5, 1);
}
.pbi-rch .ok svg { width: 13px; height: 13px; }
.pbi-rch .pw.done .ok { transform: scale(1); }
.pbi-rch .tip {
  position: absolute;
  z-index: 4;
  left: 0;
  top: 0;
  pointer-events: none;
  will-change: transform;
}
.pbi-rch .tip .cen { top: auto; bottom: 0; }
.pbi-rch .tbox {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 14px 0 8px;
  border-radius: 12px;
  background: #FFFFFF;
  border: 1px solid #BAE6FD;
  box-shadow: 0 18px 40px -16px rgba(2, 132, 199, 0.35), 0 2px 6px -2px rgba(16, 24, 40, 0.08);
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  transform: scale(0);
  transform-origin: 50% 100%;
}
.pbi-rch .tbox::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -5px;
  width: 9px;
  height: 9px;
  margin-left: -5px;
  background: #FFFFFF;
  border-right: 1px solid #BAE6FD;
  border-bottom: 1px solid #BAE6FD;
  transform: rotate(45deg);
}
.pbi-rch .tbox.reply { font-weight: 500; }
.pbi-rch .tg {
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}
.pbi-rch .tg.caution { color: #B54708; background: #FFFAEB; border: 1px solid #FEDF89; }
.pbi-rch .tg.route { color: #027A48; background: #ECFDF3; border: 1px solid #A6F4C5; }
.pbi-rch .tg.plain { color: #0284C7; background: #F0F9FF; border: 1px solid #BAE6FD; }
@media (prefers-reduced-motion: reduce) {
  .pbi-rch * { animation: none !important; transition: none !important; }
}
`;

export interface PowerBiCrowdHeroProps {
  data?: BusinessSignal[];
  className?: string;
}

export function PowerBiCrowdHero({
  data = POWER_BI_SIGNALS,
  className = '',
}: PowerBiCrowdHeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const $ = (s: string) => root.querySelector(s) as HTMLElement;
    const frozen = !!navigator.webdriver || matchMedia('(prefers-reduced-motion: reduce)').matches;
    const A: typeof animate | null = frozen ? null : animate;
    let seed = frozen ? 11 : (Math.random() * 1e9) | 0;
    const rnd = () => {
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const ease = (k: number) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

    const fx = $('.fx') as HTMLCanvasElement;
    if (!fx) return;
    const g = fx.getContext('2d')!;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let W = root.clientWidth;
    let H = root.clientHeight;

    const size = () => {
      W = root.clientWidth;
      H = root.clientHeight;
      fx.width = W * dpr;
      fx.height = H * dpr;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(root);

    const AC = getComputedStyle(root).getPropertyValue('--ac').trim() || '2, 132, 199';
    const COL = `rgb(${AC})`;
    const al = (o: number) => `rgba(${AC},${o})`;
    const BY = 448;
    const TOP = 530;
    const BH = 350;

    const crowd = $('.crowd');
    const P: any[] = [];
    crowd.innerHTML = '';

    const fade = (p: any) =>
      `blur(${Math.max(0, (74 - p.t) * 0.045).toFixed(2)}px) contrast(${(0.36 + 0.3 * p.depth).toFixed(2)}) brightness(${(
        1 /
        (0.68 + 0.15 * p.depth)
      ).toFixed(2)})`;

    function place(p: any, anywhere: boolean) {
      p.t = 31 + rnd() * 54;
      p.depth = (p.t - 31) / 54;
      p.w = 146 + (p.t - 31.8) * 2.62;
      p.h = p.w * 1.35;
      p.dir = rnd() < 0.5 ? 1 : -1;
      p.speed = 108 / (12 + rnd() * 26);
      p.x = anywhere ? -4 + rnd() * 108 : p.dir > 0 ? -10 : 110;
      p.v = 1;
      p.state = 'walk';
      p.reached = false;
      p.ph = rnd() * 6.283;
      p.f = 1.5 + p.speed * 0.22;
      p.bob = 0;
      p.px = (p.x / 100) * W;
      p.el.className = 'pw';
      p.el.style.cssText = `top:${p.t.toFixed(2)}%;width:${p.w.toFixed(1)}px;height:${p.h.toFixed(1)}px;z-index:${p.t | 0}`;
      p.img.src = PEEPS[(rnd() * PEEPS.length) | 0];
      p.img.style.filter = fade(p);
      p.img.style.transform = `scaleX(${p.dir})`;
    }

    for (let i = 0; i < 40; i++) {
      const el = document.createElement('div');
      el.innerHTML =
        '<div class="pe"><div class="hp"><img alt="" draggable="false" decoding="async"><i class="ok"><svg viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" d="M5 12.5l4.5 4.5L19 7.5"/></svg></i></div></div>';
      crowd.appendChild(el);
      const p = {
        el,
        pe: el.firstChild as HTMLElement,
        hp: el.firstChild!.firstChild as HTMLElement,
        img: el.querySelector('img')!,
      };
      place(p, true);
      P.push(p);
    }

    const head = (p: any) => [p.px, TOP + (BH * p.t) / 100 - p.h / 2 + p.h * 0.3 + p.bob];

    const S: any[] = [0, 1, 2].map(() => {
      const tip = document.createElement('div');
      tip.className = 'tip';
      tip.innerHTML = '<div class="cen"><div class="tbox"></div></div>';
      root.appendChild(tip);
      return { tip, box: tip.querySelector('.tbox'), p: null };
    });

    const btile = $('.btile');
    const cbox = $('.cbox');
    const clab = $('.cbox .lab');
    const ctxt = $('.cbox .txt');
    let comp: any = null;

    const pop = (el: HTMLElement, on: boolean) => {
      if (A)
        A(
          el,
          { scale: on ? [0, 1] : [1, 0], opacity: on ? [0, 1] : [1, 0] },
          on ? { type: 'spring', stiffness: 420, damping: 22 } : { duration: 0.2 }
        );
      else {
        el.style.transform = `scale(${on ? 1 : 0})`;
        el.style.opacity = on ? '1' : '0';
      }
    };

    const flip = (s: any) => {
      const d = s.d;
      const set = () => {
        s.box.className = 'tbox reply';
        s.box.innerHTML = `<span class="tg ${d.rc}">${d.rtag}</span>“${d.reply}”`;
      };
      if (A)
        A(s.box, { rotateX: [0, 90] }, { duration: 0.14, ease: 'easeIn' }).then(() => {
          set();
          A(s.box, { rotateX: [-90, 0] }, { type: 'spring', stiffness: 480, damping: 20 });
        });
      else set();
    };

    const hop = (p: any) => {
      if (A) A(p.hp, { y: [0, -26, 0], scale: [1, 1.06, 1] }, { duration: 0.6, ease: [0.3, 0, 0.3, 1] });
    };

    const bump = (k: number) => {
      if (A) A(btile, { scale: [1, k, 1] }, { duration: 0.45, ease: [0.3, 0, 0.2, 1] });
    };

    const hit = (c: string) => {
      if (frozen) return;
      const e = $('.' + c);
      if (!e) return;
      e.classList.remove('hit');
      void e.offsetWidth;
      e.classList.add('hit');
    };

    let side = 1;
    let di = 0;
    let nextAt = 0.6;

    function pick() {
      const act = S.filter((s) => s.p).map((s) => s.p.px);
      const cx = W / 2;
      const ok = (p: any) => {
        if (p.state !== 'walk' || p.reached || p.t < 47) return false;
        const f = p.px + ((p.dir * p.speed) / 100) * W * 2.4;
        return (
          p.px > W * 0.13 &&
          p.px < W * 0.87 &&
          f > W * 0.1 &&
          f < W * 0.9 &&
          Math.abs(p.px - cx) > 120 &&
          act.every((a) => Math.abs(a - p.px) > 380)
        );
      };
      let c = P.filter(ok);
      const pref = c.filter((p) => (p.px - cx) * side > 0);
      if (pref.length) c = pref;
      if (!c.length) return null;
      side = -side;
      return c[(rnd() * c.length) | 0];
    }

    function start(now: number) {
      const s = S.find((s) => !s.p);
      if (!s) {
        nextAt = now + 0.2;
        return;
      }
      const p = pick();
      if (!p) {
        nextAt = now + 0.3;
        return;
      }
      s.p = p;
      s.d = data[di++ % data.length];
      s.t0 = now;
      s.st = 0;
      s.ly = 0;
      nextAt = now + 2.5;
      p.state = 'locked';
      p.el.style.zIndex = 200;
      p.img.style.filter = 'none';
      p.img.style.transform = `scaleX(${p.dir}) scale(1.07)`;
    }

    /* Draws a high-tech Power BI intelligence packet flying across the arc */
    const scorecardPacket = (x: number, y: number, rot: number, sc: number) => {
      g.save();
      g.translate(x, y);
      g.rotate(rot);
      g.scale(sc, sc);
      g.globalAlpha = 1;
      g.setLineDash([]);
      g.shadowColor = al(0.6);
      g.shadowBlur = 16;
      g.fillStyle = '#FFFFFF';
      g.strokeStyle = COL;
      g.lineWidth = 2;
      g.lineJoin = 'round';
      g.beginPath();
      g.roundRect(-16, -11, 32, 22, 5);
      g.fill();
      g.shadowBlur = 0;
      g.stroke();

      // Mini Power BI 3-bar chart icon inside flying packet
      g.fillStyle = '#F2C811';
      g.fillRect(-10, 0, 4, 6);
      g.fillStyle = '#E59F0B';
      g.fillRect(-4, -4, 4, 10);
      g.fillStyle = '#D96B27';
      g.fillRect(2, -8, 4, 14);

      g.restore();
    };

    function drawReach(s: any, a: number, now: number, hx: number, hy: number) {
      const p = s.p;
      const P0 = [W / 2, BY];
      const P1 = [(P0[0] + hx) / 2, Math.min(BY, hy) - (28 + Math.abs(hx - P0[0]) * 0.07)];
      const B = (u: number) => {
        const v = 1 - u;
        return [
          v * v * P0[0] + 2 * v * u * P1[0] + u * u * hx,
          v * v * P0[1] + 2 * v * u * P1[1] + u * u * hy,
        ];
      };
      const seg = (u0: number, u1: number, n: number) => {
        g.beginPath();
        for (let i = 0; i <= n; i++) {
          const q = B(u0 + ((u1 - u0) * i) / n);
          i ? g.lineTo(q[0], q[1]) : g.moveTo(q[0], q[1]);
        }
        g.stroke();
      };

      g.strokeStyle = COL;
      g.lineCap = 'round';

      if (a < 3.75) {
        const R = p.w * 0.27;
        const k = Math.min(1, a / 0.5);
        const e = 1 - Math.pow(1 - k, 3);
        g.save();
        g.translate(hx, hy);
        g.rotate(now * 1.2);
        g.globalAlpha = 0.9 * k;
        g.lineWidth = 2;
        g.setLineDash([R * 0.5, R * 0.285]);
        g.beginPath();
        g.arc(0, 0, R * (2.2 - 1.2 * e), 0, 6.2832);
        g.stroke();
        g.restore();
      }

      if (a < 6.2) {
        g.save();
        g.lineWidth = 1.4;
        if (a < 3.75) {
          g.globalAlpha = 0.6;
          g.setLineDash([3, 6]);
          g.lineDashOffset = -now * 24;
          seg(0, Math.min(1, a / 0.6), 28);
        } else {
          g.globalAlpha = 0.35 * Math.min(1, (6.2 - a) / 0.4);
          seg(0, 1, 28);
        }
        g.restore();
      }

      if (a >= 2.9 && a < 3.75) {
        const u = ease((a - 2.9) / 0.85);
        g.save();
        g.shadowColor = al(0.8);
        g.shadowBlur = 14;
        for (let i = 0; i < 14; i++) {
          const u1 = u - (0.46 * i) / 14;
          const u0 = u - (0.46 * (i + 1)) / 14;
          if (u1 <= 0) break;
          const f = 1 - i / 14;
          g.globalAlpha = f * 0.22;
          g.lineWidth = 16 * f;
          seg(Math.max(0, u0), u1, 3);
          g.globalAlpha = f * 0.95;
          g.lineWidth = 6 * f + 1;
          seg(Math.max(0, u0), u1, 3);
        }
        g.restore();

        const q = B(u);
        const q2 = B(Math.min(1, u + 0.02));
        const dx = q2[0] - q[0];
        scorecardPacket(
          q[0],
          q[1],
          Math.atan2(q2[1] - q[1], Math.abs(dx) || 1e-6) * (dx >= 0 ? 1 : -1) * 0.6,
          Math.min(1, (a - 2.9) / 0.15)
        );
      }

      if (a >= 3.75 && a < 4.4) {
        const k = (a - 3.75) / 0.65;
        const e = 1 - Math.pow(1 - k, 3);
        g.save();
        g.globalAlpha = 1 - k;
        g.lineWidth = 2.5;
        g.beginPath();
        g.arc(hx, hy, p.w * 0.2 + e * p.w * 0.32, 0, 6.2832);
        g.stroke();
        g.lineWidth = 2;
        for (let i = 0; i < 10; i++) {
          const an = (i / 10) * 6.2832 + s.t0;
          const r0 = p.w * 0.3 + e * p.w * 0.22;
          const r1 = r0 + 12 * (1 - k);
          g.beginPath();
          g.moveTo(hx + Math.cos(an) * r0, hy + Math.sin(an) * r0);
          g.lineTo(hx + Math.cos(an) * r1, hy + Math.sin(an) * r1);
          g.stroke();
        }
        g.restore();
      }

      if (a >= 5.3 && a < 6) {
        const u = 1 - ease((a - 5.3) / 0.7);
        g.save();
        for (let i = 0; i < 8; i++) {
          const u0 = u + (0.22 * i) / 8;
          const u1 = u + (0.22 * (i + 1)) / 8;
          if (u0 >= 1) break;
          g.globalAlpha = (1 - i / 8) * 0.7;
          g.lineWidth = 3 * (1 - i / 10);
          seg(u0, Math.min(1, u1), 3);
        }
        const q = B(u);
        g.globalAlpha = 1;
        g.shadowColor = al(0.85);
        g.shadowBlur = 12;
        g.fillStyle = COL;
        g.beginPath();
        g.arc(q[0], q[1], 6, 0, 6.2832);
        g.fill();
        g.shadowBlur = 0;
        g.fillStyle = '#FFFFFF';
        g.beginPath();
        g.arc(q[0], q[1], 2.4, 0, 6.2832);
        g.fill();
        g.restore();
      }
    }

    let mx = 0;
    let tmx = 0;
    const onMove = (e: PointerEvent) => {
      tmx = (e.clientX - root.getBoundingClientRect().left) / W - 0.5;
    };
    addEventListener('pointermove', onMove);

    function tick(now: number, dt: number, draw: boolean) {
      mx += (tmx - mx) * Math.min(1, dt * 4);
      for (const p of P) {
        const tv = p.state === 'walk' ? 1 : p.state === 'locked' ? 0.45 : 0;
        p.v += (tv - p.v) * Math.min(1, dt * 5);
        p.x += p.dir * p.speed * p.v * dt;
        if ((p.x > 111 || p.x < -11) && p.state === 'walk') place(p, false);
        const s = Math.sin(now * Math.PI * p.f + p.ph);
        p.bob = -Math.abs(s) * (1.5 + 2.5 * p.depth) * p.v;
        p.px = (p.x / 100) * W - mx * p.depth * W * 0.02;
        if (draw)
          p.pe.style.transform = `translate3d(${(p.px - p.w / 2).toFixed(1)}px,${(
            -p.h / 2 +
            p.bob
          ).toFixed(1)}px,0) rotate(${(s * 0.7 * p.v).toFixed(2)}deg)`;
      }

      if (now >= nextAt) start(now);
      if (draw) g.clearRect(0, 0, W, H);

      for (const s of S) {
        if (!s.p) continue;
        const a = now - s.t0;
        const p = s.p;
        const d = s.d;

        if (s.st < 1 && a >= 0.9) {
          s.st = 1;
          s.box.className = 'tbox';
          s.box.innerHTML = `<span class="tg ${d.tc}">${d.tag}</span>${d.signal}`;
          pop(s.box, true);
        }
        if (s.st < 2 && a >= 1.8) {
          s.st = 2;
          comp = { d, t0: now, n: -1 };
          clab.textContent = d.lab;
          ctxt.textContent = '';
          pop(cbox, true);
        }
        if (s.st < 3 && a >= 2.9) {
          s.st = 3;
          if (comp && comp.d === d) {
            pop(cbox, false);
            comp = null;
          }
          bump(1.16);
          hit('p1');
        }
        if (s.st < 4 && a >= 3.75) {
          s.st = 4;
          p.state = 'read';
          p.reached = true;
          p.img.style.filter = `drop-shadow(0 0 14px ${al(0.6)})`;
          hop(p);
        }
        if (s.st < 5 && a >= 4.45) {
          s.st = 5;
          flip(s);
          hit('p2');
        }
        if (s.st < 6 && a >= 6) {
          s.st = 6;
          bump(1.1);
          p.el.classList.add('done');
        }
        if (s.st < 7 && a >= 6.7) {
          s.st = 7;
          pop(s.box, false);
          p.state = 'walk';
          p.el.style.zIndex = p.t | 0;
          p.img.style.transform = `scaleX(${p.dir})`;
          p.img.style.filter = `drop-shadow(0 0 8px ${al(0.45)})`;
        }
        if (a >= 7.1) {
          s.p = null;
          continue;
        }

        if (draw) {
          const [hx, hy] = head(p);
          s.hx = hx;
          s.ty = hy - p.h * 0.21 - 14;
          let lift = 0;
          for (const o of S)
            if (o !== s && o.p && o.t0 < s.t0 && Math.abs(o.hx - hx) < 350 && Math.abs(o.ty - s.ty) < 46)
              lift = -46;
          s.ly += (lift - s.ly) * Math.min(1, dt * 8);
          s.tip.style.transform = `translate(${hx.toFixed(1)}px,${(s.ty + s.ly).toFixed(1)}px)`;
          drawReach(s, a, now, hx, hy);
        }
      }

      if (comp) {
        const L = comp.d.line;
        const n = Math.ceil(Math.min(1, (now - comp.t0) / 0.8) * L.length);
        if (n !== comp.n) {
          comp.n = n;
          ctxt.textContent = L.slice(0, n);
        }
      }
    }

    let raf = 0;
    if (frozen) {
      let i = 0;
      for (; i < 1500; i++) {
        tick(i / 60, 1 / 60, false);
        if (
          i > 420 &&
          S.filter((s) => s.p).length > 1 &&
          S.some((s) => s.p && i / 60 - s.t0 > 3.32 && i / 60 - s.t0 < 3.4)
        )
          break;
      }
      tick(i / 60, 0, true);
      $('.p1')?.classList.add('lit');
    } else {
      animate(
        root.querySelectorAll('h1 .w'),
        { opacity: [0, 1], y: [28, 0], filter: ['blur(10px)', 'blur(0px)'] },
        { duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay: stagger(0.08) }
      );
      animate(
        root.querySelectorAll('.lead,.ctas,.breadcrumbs'),
        { opacity: [0, 1], y: [16, 0] },
        { duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay: stagger(0.1, { startDelay: 0.2 }) }
      );
      animate(btile, { scale: [0, 1] }, { type: 'spring', stiffness: 300, damping: 16, delay: 0.5 });
      animate(crowd, { opacity: [0, 1] }, { duration: 0.9 });

      let last = performance.now();
      let now = 0;
      const loop = (ms: number) => {
        const dt = Math.min(0.25, Math.max(0, (ms - last) / 1000));
        last = ms;
        now += dt;
        tick(now, dt, true);
        raf = requestAnimationFrame(loop);
      };
      loop(last);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      removeEventListener('pointermove', onMove);
      S.forEach((s) => s.tip?.remove());
      crowd.innerHTML = '';
    };
  }, [data]);

  return (
    <div ref={ref} className={`pbi-rch ${className}`}>
      <style>{CSS}</style>
      <div className="bg" aria-hidden="true">
        <i className="b1" />
        <i className="b2" />
        <i className="b3" />
        <i className="b4" />
        <div className="dome" />
      </div>

      {/* Main Hero Header & Interactive Signal Beacon */}
      <main className="hero">
        {/* Breadcrumb Navigation */}
        <div className="breadcrumbs flex items-center justify-center gap-2 text-xs text-[#667085] mb-6 font-body">
          <Link href="/" className="hover:text-[#101828] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-[#101828] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0284C7] font-semibold">Power BI Solutions</span>
        </div>

        {/* Main Display Headline (Matching Website Typography Standard) */}
        <h1>
          <span className="ph p1">
            <span className="w">Scattered</span> <span className="w">Spreadsheets</span>
          </span>{' '}
          <span className="w">turned</span> <span className="w">into</span>{' '}
          <span className="ph p2">
            <em>
              <span className="w">Live</span> <span className="w">Dashboards.</span>
            </em>
          </span>
        </h1>

        {/* Lead Explanatory Paragraph */}
        <p className="lead">
          Stop waiting 10 days for monthly reviews. We architect interactive, single-pane Power BI command centers directly integrated into your Tally Prime, SAP, and SQL archives.
        </p>

        {/* Dual CTA Buttons */}
        <div className="ctas">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm shadow-lg shadow-[#0284C7]/25 hover:shadow-xl hover:shadow-[#0284C7]/40 transition-all hover:scale-[1.01]"
          >
            <span>Book Free 30-Min Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={CONTACT_INFO.getWhatsAppUrl('Hi DataLive Intelligence, I would like to consult about Power BI Solutions.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white hover:bg-[#F9FAFB] border border-[#D0D5DD] text-[#344054] font-semibold text-sm shadow-xs transition-all"
          >
            <Phone className="w-4 h-4 text-[#0284C7]" />
            <span>WhatsApp Direct Inquiry</span>
          </a>
        </div>
      </main>

      {/* Dynamic Animated Crowd Canvas */}
      <div className="crowd" aria-hidden="true" />
      <canvas className="fx" aria-hidden="true" />

      {/* Center Intelligence Beacon with Website Brand Logo */}
      <div className="beacon" aria-hidden="true">
        <div className="btile p-2.5">
          <Image
            src="/final_logo_favicon_pack/final-logo-transparent-master.png"
            alt="DataLive Intelligence"
            width={44}
            height={44}
            className="w-10 h-10 object-contain drop-shadow-sm"
          />
        </div>
      </div>

      {/* Real-time typing composer capsule */}
      <div className="compose" aria-hidden="true">
        <div className="cen">
          <div className="cbox">
            <span className="lab" />
            <span className="txt font-medium text-[#101828]" />
            <i className="caret" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PowerBiCrowdHero;
