"use client";

import React from "react";
import { ArrowRight, TrendingUp, Clock, AlertTriangle, CheckCircle2, Database, Truck, HardHat, FileBarChart } from "lucide-react";
import { SimpleNavbar, Footer } from "../page";

// --- REALISTIC DATA SIMULATION ---
const CASES = [
    {
        id: 1,
        client: "Mid-Sized Logistics Fleet",
        industry: "Logistics",
        icon: <Truck className="w-6 h-6" />,
        title: "Stopping Fuel Theft & Idling Waste",
        problem: "Drivers were leaving engines running for hours, and fuel receipts didn't match mileage. The owner was losing ~$3,000/month in unaccounted fuel.",
        solution: "We integrated a GPS-to-ERP connector that cross-references fuel card swipes with exact vehicle location and tank levels.",
        stats: [
            { label: "Fuel Costs", value: "-18%", color: "text-green-600" },
            { label: "Annual Savings", value: "$36k", color: "text-brand-heading" },
        ],
        tags: ["IoT Integration", "Fuel Monitoring"],
    },
    {
        id: 2,
        client: "Construction Subcontractor",
        industry: "Construction",
        icon: <HardHat className="w-6 h-6" />,
        title: "From WhatsApp Timesheets to Auto-Payroll",
        problem: "Site supervisors sent attendance photos via WhatsApp. HR spent 4 days every month manually typing this into Excel, leading to payroll errors.",
        solution: "Deployed a simple mobile check-in app. Data syncs instantly to payroll. HR now approves salaries in 2 hours, not 4 days.",
        stats: [
            { label: "Admin Time", value: "-90%", color: "text-brand-blue" },
            { label: "Payroll Errors", value: "0%", color: "text-brand-heading" },
        ],
        tags: ["Process Automation", "Mobile Forms"],
    },
    {
        id: 3,
        client: "Equipment Rental Firm",
        industry: "Heavy Equipment",
        icon: <Database className="w-6 h-6" />,
        title: "Predicting Maintenance Before Breakdown",
        problem: "Cranes kept breaking down on client sites, leading to expensive emergency repairs and angry customers.",
        solution: "Implemented a predictive maintenance dashboard using historical data to alert mechanics 2 weeks before a likely failure.",
        stats: [
            { label: "Downtime", value: "-40%", color: "text-green-600" },
            { label: "Uptime", value: "98%", color: "text-brand-heading" },
        ],
        tags: ["Predictive AI", "Asset Mgmt"],
    }
];

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-brand-navy">

            {/* 1. HERO SECTION */}
            <SimpleNavbar />

            {/* 2. CASE STUDY GRID */}
            <div className="max-w-7xl mt-28 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {CASES.map((item) => (
                        <div
                            key={item.id}
                            className="bg-brand-surface rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-xl group border border-transparent hover:border-brand-blue/30"
                        >

                            {/* Card Header: Industry & Icon */}
                            <div className="bg-brand-light p-6 border-b border-gray-100 flex items-center justify-between">
                                <span className="text-xs font-bold text-brand-blue uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                                    {item.industry}
                                </span>
                                <div className="text-gray-400 group-hover:text-brand-blue transition-colors">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Card Body: Problem & Solution */}
                            <div className="p-6 md:p-8">
                                <h3 className="text-xl font-bold text-brand-heading mb-4 group-hover:text-brand-blue transition-colors">
                                    {item.title}
                                </h3>

                                {/* The "Before" (Pain) */}
                                <div className="mb-6 relative pl-4 border-l-2 border-red-200">
                                    <div className="absolute -left-[9px] top-0 bg-brand-surface text-red-400">
                                        <AlertTriangle className="w-4 h-4" />
                                    </div>
                                    <p className="text-sm text-gray-500 italic">
                                        "{item.problem}"
                                    </p>
                                </div>

                                {/* The "After" (Solution) */}
                                <div className="mb-8 relative pl-4 border-l-2 border-green-200">
                                    <div className="absolute -left-[9px] top-0 bg-brand-surface text-green-500">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <p className="text-sm text-brand-text">
                                        {item.solution}
                                    </p>
                                </div>

                                {/* The Stats Box (The Punch) */}
                                <div className="bg-brand-light rounded-xl p-4 flex items-center justify-between">
                                    {item.stats.map((stat, idx) => (
                                        <div key={idx} className="text-center w-1/2 first:border-r border-gray-200">
                                            <div className={`text-2xl font-bold ${stat.color}`}>
                                                {stat.value}
                                            </div>
                                            <div className="text-xs text-gray-500 uppercase font-medium mt-1">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {item.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] text-gray-400 border border-gray-100 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* 3. BOTTOM CTA */}
            <div className="max-w-4xl mx-auto mt-20 mb-20 text-center px-4">
                <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Wondering if this works for you?
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            You don't need a massive budget to see results like these.
                            Start by finding out how much you are currently losing.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="/audit" className="w-full sm:w-auto px-8 py-3 bg-brand-blue text-white font-bold rounded-lg hover:bg-green-600 transition-colors">
                                Take the Readiness Audit
                            </a>
                            <a href="/contact" className="w-full sm:w-auto px-8 py-3 bg-transparent border border-gray-500 text-white font-medium rounded-lg hover:bg-white/5 transition-colors">
                                Book a Strategy Call
                            </a>
                        </div>
                    </div>

                    {/* Background Grid Texture */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
                </div>
            </div>
            <Footer />

        </div>
    );
}