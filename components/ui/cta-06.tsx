"use client";

import React from "react";
import { NeuroNoise } from "@paper-design/shaders-react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="px-0 py-16 sm:px-6 bg-white text-white">
      <div className="relative mx-auto max-w-5xl overflow-hidden border-y border-white/10 bg-[#09090b] p-8 sm:p-14 shadow-2xl sm:rounded-2xl sm:border">
        <NeuroNoise
          brightness={0}
          className="mask-l-from-30 sm:mask-l-from-10 absolute inset-0 pointer-events-none"
          colorBack="#000000"
          colorFront="#ffffff"
          colorMid="rgba(255, 255, 255, 0.85)"
          contrast={1}
          height={720}
          scale={0.55}
          speed={1}
          width={1280}
        />

        <div className="relative isolate text-left">
          <h2 className="text-balance font-bold font-display text-3xl sm:text-4xl text-white tracking-tight md:leading-tight lg:text-[2.75rem]">
            Experience the difference
          </h2>
          <p className="mt-4 text-balance text-[#98A2B3] font-body text-base sm:text-lg md:mt-2.5 lg:text-xl/normal max-w-2xl leading-relaxed">
            Join thousands of developers using our premium component library to
            ship beautiful UIs in minutes, not hours.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-white hover:bg-slate-100 text-black rounded-lg font-semibold h-11 px-6 shadow-sm inline-flex items-center gap-1.5 transition-all hover:scale-[1.01]"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/10 rounded-lg font-semibold h-11 px-6 transition-all"
            >
              View Components
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
