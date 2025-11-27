"use client";

import React, { useState } from 'react';
import {
    CheckCircle2, ChevronRight, ChevronLeft,
    Save, Truck, Users, HardHat,
    BarChart3, Database, AlertTriangle,
    Clock, ArrowDown
} from 'lucide-react';
import { Footer } from '../page';


// --- BACKGROUND COMPONENTS ---
const GridPattern = () => (
    <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
        <defs>
            <pattern id="983e3e43-de66-4c3f-8d68-b9761d1534b0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#983e3e43-de66-4c3f-8d68-b9761d1534b0)" />
    </svg>
);

const BlueBlob = ({ className }: { className?: string }) => (
    <div className={`absolute rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob ${className}`}></div>
);

// --- DATA CONFIGURATION ---
const ROADMAP_STEPS = [
    {
        phase: "01",
        title: "Discovery & Data Audit",
        duration: "2-3 Weeks",
        description: "We interview key stakeholders, assess data quality (IVMS, logs), and identify the highest-impact AI pilots.",
        deliverables: ["AI Readiness Report", "Data Quality Audit", "Pilot Selection"],
        color: "text-brand-blue border-brand-blue/80/30 bg-brand-blue/80/10"
    },
    {
        phase: "02",
        title: "Quick Wins & Setup",
        duration: "2-4 Weeks",
        description: "Deploying lightweight automation (e.g., WhatsApp-to-PDF) to build trust and organizing data for the core models.",
        deliverables: ["Automated Reporting Tool", "Structured Datasets", "Fleet Dashboard v1"],
        color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
    },
    {
        phase: "03",
        title: "Core Model Development",
        duration: "4-6 Weeks",
        description: "Engineering the custom Predictive Maintenance and Scheduling Optimization engines using historical data.",
        deliverables: ["Predictive Engine Alpha", "Scheduler Algorithm", "Integration API"],
        color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10"
    },
    {
        phase: "04",
        title: "Pilot Deployment",
        duration: "4-8 Weeks",
        description: "Live testing on 1 remote site and ~25 machines. Fine-tuning models based on real-world feedback.",
        deliverables: ["Pilot Performance Report", "ROI Validation", "Optimization Adjustments"],
        color: "text-amber-400 border-amber-500/30 bg-amber-500/10"
    },
    {
        phase: "05",
        title: "Full Rollout",
        duration: "1-2 Months",
        description: "Scaling the solution across the entire fleet and all project sites. Training all supervisors.",
        deliverables: ["Company-wide Access", "SOP Documentation", "ERP Integration"],
        color: "text-slate-300 border-slate-500/30 bg-slate-500/10"
    }
];

const AUDIT_SECTIONS = [
    {
        id: "fleet",
        title: "Fleet & Equipment",
        icon: Truck,
        questions: [
            { id: "fleet_size", label: "Total Heavy Equipment Units", type: "number", placeholder: "e.g. 150" },
            { id: "tracking_system", label: "Current Tracking System", type: "select", options: ["IVMS / GPS Only", "Full Telemetry (Engine Data)", "Manual Logs", "None"] },
            { id: "maintenance_logs", label: "How is maintenance tracked?", type: "select", options: ["ERP System", "Excel Spreadsheets", "Paper / Physical Logs", "Mixed"] },
            { id: "breakdown_freq", label: "Avg. Breakdowns per Week", type: "number", placeholder: "e.g. 5" }
        ]
    },
    {
        id: "scheduling",
        title: "Manpower & Scheduling",
        icon: Users,
        questions: [
            { id: "scheduling_method", label: "How are crews scheduled?", type: "select", options: ["Whiteboard / Manual", "Excel / WhatsApp", "Specialized Software"] },
            { id: "bottleneck", label: "Biggest Scheduling Bottleneck", type: "text", placeholder: "e.g. Moving crews between remote sites" },
            { id: "idle_time", label: "Estimated Idle Time (%)", type: "number", placeholder: "e.g. 20" }
        ]
    },
    {
        id: "execution",
        title: "Project Execution",
        icon: HardHat,
        questions: [
            { id: "reporting_method", label: "Site Reporting Method", type: "select", options: ["WhatsApp Voice/Text", "Phone Call", "Paper Forms", "Digital App"] },
            { id: "delay_cause", label: "Most Common Delay Cause", type: "text", placeholder: "e.g. Material shortage, equipment failure" },
            { id: "remote_visits", label: "Mgmt Visits to Remote Sites (per month)", type: "number", placeholder: "e.g. 2" }
        ]
    },
    {
        id: "pain_points",
        title: "Critical Pain Points",
        icon: AlertTriangle,
        questions: [
            { id: "top_cost", label: "Top Operational Cost Driver", type: "text", placeholder: "e.g. Fuel theft, unplanned downtime" },
            { id: "decision_delay", label: "Slowest Decision Process", type: "text", placeholder: "e.g. Approving new equipment rental" }
        ]
    },
    {
        id: "systems",
        title: "Data & Systems",
        icon: Database,
        questions: [
            { id: "current_erp", label: "Current ERP / Software Stack", type: "text", placeholder: "e.g. SAP, Oracle, Tally, Custom" },
            { id: "ai_champion", label: "Internal Point of Contact for AI", type: "text", placeholder: "Name / Role" }
        ]
    }
];

export default function ProposalPage() {
    const [currentSection, setCurrentSection] = useState(0);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [answers, setAnswers] = useState<Record<string, any>>({});
    const [isComplete, setIsComplete] = useState(false);

    const handleInputChange = (id: string, value: string | number) => {
        setAnswers(prev => ({ ...prev, [id]: value }));
    };

    const handleNext = () => {
        if (currentSection < AUDIT_SECTIONS.length - 1) {
            setCurrentSection(prev => prev + 1);
        } else {
            setIsComplete(true);
        }
    };

    const handlePrev = () => {
        if (currentSection > 0) {
            setCurrentSection(prev => prev - 1);
        }
    };

    const downloadJson = () => {
        const data = {
            timestamp: new Date().toISOString(),
            client: "AKTC",
            audit_data: answers
        };
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "aktc_audit_data.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    const ActiveIcon = AUDIT_SECTIONS[currentSection].icon;

    return (
        <div className="min-h-screen bg-slate-50 text-slate-700">

            {/* --- NAVBAR --- */}
            <nav className="fixed top-0 z-50 w-full bg-brand-navy/90 backdrop-blur-md border-b border-white/10 h-20 flex items-center transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <a href="/" className='cursor-pointer'>
                            <div className="bg-brand-blue text-white font-bold p-1.5 rounded text-lg">c&</div>
                        </a>
                        <a href="/" className='cursor-pointer'>
                            <span className="text-xl font-bold text-white tracking-tight">com&</span>
                        </a>
                        <span className="text-slate-500 mx-2">/</span>
                        <span className="text-xs font-mono text-brand-blue uppercase tracking-wider">Authorized Proposal</span>
                    </div>
                    <a href="/" className="text-sm font-medium text-slate-300 hover:text-white transition flex items-center gap-2">
                        Back <ChevronRight size={14} />
                    </a>
                </div>
            </nav>

            {/* --- HERO SECTION (Dark & Blue) --- */}
            <header className="relative pt-32 pb-24 px-6 bg-brand-navy overflow-hidden">
                <GridPattern />
                {/* Animated Blobs */}
                <BlueBlob className="bg-brand-blue top-0 right-0 w-96 h-96 translate-x-1/2 -translate-y-1/2" />
                <BlueBlob className="bg-indigo-600 bottom-0 left-0 w-72 h-72 -translate-x-1/2 translate-y-1/2" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/80/10 border border-brand-blue/80/20 text-blue-300 text-xs font-bold uppercase tracking-wide mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                        Confidential Strategy
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Strategic AI Roadmap <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-indigo-400">
                            {/* Al Katheery Trading */}
                        </span>
                    </h1>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
                        A phased approach to modernize your company&apos;s infrastructure. From data audit to full fleet automation, focusing on measurable ROI at every step.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="#roadmap" className="bg-brand-blue text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-blue/80 transition shadow-lg shadow-brand-blue/80/25">
                            View Timeline
                        </a>
                        <a href="#audit" className="bg-white/5 text-white border border-white/10 px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition backdrop-blur-sm">
                            Start Audit
                        </a>
                    </div>
                </div>
            </header>

            {/* --- VALUE PROPOSITION --- */}
            <section className="py-20 px-6 bg-white relative z-20 -mt-8 rounded-t-[2.5rem]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition group">
                            <div className="w-12 h-12 bg-white text-brand-blue rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                <BarChart3 size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Operational Clarity</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">Moving from reactive "fire-fighting" to proactive, data-driven decision making across all remote sites.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition group">
                            <div className="w-12 h-12 bg-white text-brand-blue rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                <ArrowDown size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Cost Reduction</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">Directly targeting the 15-20% inefficiencies in fuel usage, idle time, and unscheduled maintenance.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition group">
                            <div className="w-12 h-12 bg-white text-brand-blue rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                <Database size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Asset Longevity</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">Extending the lifespan of your heavy machinery through predictive care rather than breakdown repair.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DARK ROADMAP SECTION --- */}
            <section id="roadmap" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-brand-blue font-mono text-xs tracking-widest uppercase mb-3 block">Execution Plan</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Implementation Roadmap</h2>
                    </div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/10 before:content-['']">
                        {ROADMAP_STEPS.map((step, index) => (
                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

                                {/* Dot */}
                                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 text-slate-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10 relative`}>
                                    <span className="text-[10px] font-bold">{step.phase}</span>
                                </div>

                                {/* Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${step.color}`}>
                                            {step.duration}
                                        </div>
                                        <Clock size={16} className="text-slate-500" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">{step.description}</p>

                                    <div className="pt-4 border-t border-white/5">
                                        <ul className="space-y-2">
                                            {step.deliverables.map((d, i) => (
                                                <li key={i} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/80"></span> {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- AUDIT WIZARD --- */}
            <section id="audit" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/30 via-transparent to-indigo-100/30 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Operational Readiness Audit</h2>
                        <p className="text-slate-500 mt-3">Complete this assessment to generate your personalized data profile.</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">

                        {/* Wizard Header */}
                        <div className="bg-brand-navy p-8 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-4 w-full">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                    <ActiveIcon size={24} className="text-brand-blue" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white">{AUDIT_SECTIONS[currentSection].title}</h3>
                                    <p className="text-blue-200/60 text-xs uppercase tracking-wider mt-1">Step {currentSection + 1} of {AUDIT_SECTIONS.length}</p>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full md:w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-brand-blue/80 transition-all duration-500 ease-out"
                                    style={{ width: `${((currentSection + 1) / AUDIT_SECTIONS.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Wizard Body */}
                        <div className="p-8 md:p-10 min-h-[400px] bg-white">
                            {!isComplete ? (
                                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    {AUDIT_SECTIONS[currentSection].questions.map((q) => (
                                        <div key={q.id} className="group">
                                            <label className="block text-sm font-semibold text-slate-700 mb-3 group-focus-within:text-brand-blue transition-colors">
                                                {q.label}
                                            </label>
                                            {q.type === 'select' ? (
                                                <div className="relative">
                                                    <select
                                                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/80/20 focus:border-brand-blue/80 outline-none transition text-slate-700 appearance-none cursor-pointer hover:bg-slate-100"
                                                        value={answers[q.id] || ""}
                                                        onChange={(e) => handleInputChange(q.id, e.target.value)}
                                                    >
                                                        <option value="" disabled>Select an option...</option>
                                                        {q.options?.map(opt => (
                                                            <option key={opt} value={opt}>{opt}</option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                        <ChevronDownIcon />
                                                    </div>
                                                </div>
                                            ) : (
                                                <input
                                                    type={q.type}
                                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue/80/20 focus:border-brand-blue/80 outline-none transition text-slate-700 placeholder:text-slate-400 hover:bg-slate-100"
                                                    placeholder={q.placeholder}
                                                    value={answers[q.id] || ""}
                                                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full py-12 text-center animate-in zoom-in duration-500">
                                    <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 border border-emerald-100 shadow-sm">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Audit Complete</h3>
                                    <p className="text-slate-500 max-w-md mb-10 text-lg">
                                        We have successfully captured your operational data. Download the JSON record below to include in your formal proposal package.
                                    </p>
                                    <button
                                        onClick={downloadJson}
                                        className="bg-brand-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-xl shadow-blue-900/20 flex items-center gap-3"
                                    >
                                        <Save size={20} /> Download JSON Record
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Wizard Footer */}
                        {!isComplete && (
                            <div className="bg-slate-50 p-6 md:px-10 border-t border-slate-200 flex justify-between items-center">
                                <button
                                    onClick={handlePrev}
                                    disabled={currentSection === 0}
                                    className={`px-6 py-3 rounded-lg font-medium text-sm transition flex items-center gap-2 ${currentSection === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-200'}`}
                                >
                                    <ChevronLeft size={16} /> Previous
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="bg-brand-blue text-white px-8 py-3 rounded-lg font-medium text-sm hover:bg-brand-blue/80 cursor-pointer transition shadow-lg shadow-brand-blue/80/30 flex items-center gap-2"
                                >
                                    {currentSection === AUDIT_SECTIONS.length - 1 ? 'Finish Audit' : 'Next Step'} <ChevronRight size={16} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

// Helper component for select arrow
const ChevronDownIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);