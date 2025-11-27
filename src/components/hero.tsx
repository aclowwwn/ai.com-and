"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, BarChart3, Zap, CheckCircle2 } from "lucide-react";

// --- SUB-COMPONENT: ANIMATED GAUGE ---
const Gauge = ({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPercent(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center relative group">
      {/* Gauge SVG */}
      <div className="relative w-24 h-24">
        {/* Background Track */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-100" // Light grey track for contrast on white card
          />
          {/* Active Progress Bar */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-brand-blue transition-all duration-[2000ms] ease-out"
          />
        </svg>

        {/* Number in center */}
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-xl font-bold text-brand-heading tabular-nums">
            {percent}%
          </span>
        </div>
      </div>
      
      {/* Label */}
      <span className="text-xs font-medium text-gray-500 mt-2 uppercase tracking-wide">
        {label}
      </span>

      {/* Live Pulse Dot */}
      <div 
        className="absolute top-0 right-2 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" 
        style={{ animationDuration: '3s' }}
      ></div>
    </div>
  );
};

// --- MAIN HERO COMPONENT ---
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy pt-20 pb-28 md:pt-32 md:pb-40">
      
      {/* Background Ambience (Darker & Subtler) */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Grid Pattern Overlay (Optional Texture) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT: COPYWRITING (Adapted for Dark Mode) */}
          <div className="max-w-2xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-brand-blue text-sm font-semibold mb-6 animate-in slide-in-from-bottom-4 fade-in duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              <span className="text-gray-200">AI Readiness Audit Available</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-in slide-in-from-bottom-6 fade-in duration-1000 fill-mode-backwards">
              Turn Operational <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-teal-400">
                Chaos into Capital
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-100 fill-mode-backwards">
              We help fleet operators and construction firms reclaim lost revenue through intelligent automation and data precision.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-200 fill-mode-backwards">
              <a 
                href="/audit" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-brand-blue rounded-lg hover:bg-brand-blue/80 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-0.5"
              >
                Start Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="/cases" 
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-brand-navy bg-white border border-transparent rounded-lg hover:bg-gray-100 transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </div>

          {/* RIGHT: ANIMATED CARD (Light Card on Dark Background) */}
          <div className="relative lg:ml-auto w-full max-w-md animate-in zoom-in-95 fade-in duration-1000 delay-300 fill-mode-backwards">
            
            {/* The Glass Card - Kept Light for High Contrast */}
            <div className="bg-white/95 backdrop-blur-md border border-white/20 shadow-2xl shadow-black/20 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-brand-heading">Efficiency Projection</h3>
                  <p className="text-xs text-gray-500">Post-Implementation Estimate</p>
                </div>
                <div className="p-2 bg-brand-light rounded-lg text-brand-blue">
                  <BarChart3 className="w-5 h-5" />
                </div>
              </div>

              {/* The Gauges Grid */}
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {/* Gauge 1 */}
                <Gauge value={22} label="Cost Reduction" delay={500} />
                
                {/* Gauge 2 */}
                <Gauge value={94} label="Data Accuracy" delay={800} />
                
                {/* Gauge 3 */}
                <Gauge value={85} label="Fleet Uptime" delay={1100} />
                
                {/* Gauge 4 */}
                <Gauge value={40} label="Admin Saved" delay={1400} />
              </div>

              {/* Bottom "Insight" Notification */}
              <div className="mt-8 bg-gray-50 rounded-lg p-3 flex items-start gap-3 border border-gray-100">
                <Zap className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <p className="text-xs text-gray-600">
                  <span className="font-bold text-brand-heading">Impact:</span> Automation typically saves ~120 hours/month per admin team.
                </p>
              </div>

            </div>

            {/* Decorative Element Behind Card (Glow) */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-blue/20 blur-2xl rounded-full opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
}