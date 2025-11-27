"use client";

import React, { useState, useEffect } from "react";
import { Calculator, Fuel, TrendingUp, AlertTriangle, DollarSign, ArrowRight } from "lucide-react";

export function RoiCalculator() {
  // --- STATE ---
  const [fleetSize, setFleetSize] = useState(50);
  const [fuelSpend, setFuelSpend] = useState(120); // OMR per vehicle
  const [wastePercentage, setWastePercentage] = useState(15); // %
  const [solutionCost, setSolutionCost] = useState(350); // OMR

  // --- CALCULATIONS ---
  const totalFuelSpend = fleetSize * fuelSpend;
  const monthlyWaste = totalFuelSpend * (wastePercentage / 100);
  const annualLoss = monthlyWaste * 12;
  const netSavings = monthlyWaste - solutionCost;
  const roi = solutionCost > 0 ? (netSavings / solutionCost) * 100 : 0;

  // --- FORMATTER ---
  const formatOMR = (amount: number) => {
    return new Intl.NumberFormat("en-OM", {
      style: "currency",
      currency: "OMR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="bg-brand-surface rounded-2xl shadow-soft border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
        
        {/* LEFT COLUMN: INPUTS */}
        <div className="p-8 lg:p-12 w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-brand-light rounded-lg text-brand-blue">
              <Calculator className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-brand-heading">
              Savings Simulator
            </h2>
          </div>

          <div className="space-y-8">
            {/* Input 1: Fleet Size */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-brand-heading font-medium">Fleet Size (Vehicles)</label>
                <span className="text-brand-blue font-bold bg-blue-50 px-3 py-1 rounded-full text-sm">
                  {fleetSize}
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={fleetSize}
                onChange={(e) => setFleetSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
            </div>

            {/* Input 2: Monthly Fuel Spend */}
            <div>
              <label className="block text-brand-heading font-medium mb-2">
                Avg. Monthly Fuel Spend (per vehicle)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <span className="text-sm font-bold">OMR</span>
                </div>
                <input
                  type="number"
                  value={fuelSpend}
                  onChange={(e) => setFuelSpend(Number(e.target.value))}
                  className="w-full pl-12 pr-4 py-3 text-black border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all outline-none"
                />
              </div>
            </div>

            {/* Input 3: Waste Percentage */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-brand-heading font-medium">
                  Estimated Inefficiency (Waste)
                </label>
                <span className={`font-bold px-3 py-1 rounded-full text-sm ${wastePercentage > 20 ? 'bg-red-50 text-red-600' : 'bg-brand-light text-brand-text'}`}>
                  {wastePercentage}%
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                value={wastePercentage}
                onChange={(e) => setWastePercentage(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <p className="text-xs text-gray-500 mt-2">
                Industry average: 15%–25% (Idling, theft, inefficient routes)
              </p>
            </div>

            {/* Input 4: Solution Cost (Hidden power user feature: editable but subtle) */}
            <div className="pt-6 border-t border-gray-100">
              <label className="flex items-center justify-between text-sm text-gray-500 cursor-pointer group">
                <span>Est. AI Solution Cost (Monthly)</span>
                <div className="flex items-center gap-2 border-b border-transparent group-hover:border-gray-300 transition-colors">
                  <span>OMR</span>
                  <input
                    type="number"
                    value={solutionCost}
                    onChange={(e) => setSolutionCost(Number(e.target.value))}
                    className="w-16 text-right bg-transparent focus:outline-none text-gray-700 font-medium"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: RESULTS (THE PUNCH) */}
        <div className="p-8 lg:p-12 w-full lg:w-1/2 bg-brand-light/50 flex flex-col justify-center relative">
          
          {/* Background decorative blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          {/* 1. THE PAIN POINT (Money Lost) */}
          <div className="mb-8">
            <h3 className="text-gray-500 font-medium uppercase tracking-wider text-xs mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              Money Currently Burning
            </h3>
            <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm relative overflow-hidden group">
              <div className="absolute left-0 top-0 h-full w-1 bg-red-500"></div>
              <div className="text-sm text-gray-500 mb-1">Estimated Annual Loss</div>
              <div className="text-4xl lg:text-5xl font-extrabold text-brand-navy group-hover:scale-[1.02] transition-transform origin-left">
                {formatOMR(annualLoss)}
              </div>
              <div className="text-red-500 text-sm mt-2 font-medium">
                That's {formatOMR(monthlyWaste)} lost every single month.
              </div>
            </div>
          </div>

          {/* 2. THE SOLUTION (Net Savings) */}
          <div className="mb-8">
             <h3 className="text-gray-500 font-medium uppercase tracking-wider text-xs mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              Potential Recovery with AI
            </h3>
            <div className="bg-brand-navy p-6 rounded-xl shadow-lg text-white relative overflow-hidden">
               {/* Shine effect */}
               <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-wave-slow"></div>
               
              <div className="flex justify-between items-end mb-4">
                <div>
                  <div className="text-gray-300 text-sm mb-1">Your Net Monthly Savings</div>
                  <div className="text-3xl lg:text-4xl font-bold text-white">
                    {netSavings > 0 ? formatOMR(netSavings) : "OMR 0"}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-300 text-xs uppercase mb-1">ROI</div>
                  <div className={`text-2xl font-bold ${roi > 100 ? 'text-green-400' : 'text-white'}`}>
                    {Math.round(roi)}%
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400 border-t border-white/10 pt-3 mt-3">
                *Calculated after deducting the estimated solution cost of {formatOMR(solutionCost)}.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-gray-600 mb-4 italic">
              "Even conservative inefficiency rates (10–15%) produce massive savings for fleets of this size."
            </p>
            <a href="/contact" className="inline-flex items-center justify-center w-full bg-brand-blue hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-glow group">
              Stop Losing Money – Book Audit
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}