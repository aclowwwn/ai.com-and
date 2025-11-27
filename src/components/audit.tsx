"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, RefreshCcw, AlertCircle, BarChart3, Lock, Zap } from "lucide-react";

const AUDIT_SECTIONS = [
  {
    id: "data_avail",
    title: "Data Availability",
    icon: <BarChart3 className="w-6 h-6" />,
    questions: [
      "Do you consistently collect operational data (projects, clients, tasks, time, costs)?",
      "Is the data stored in a centralized system (ERP, CRM, shared drive, etc.)?",
      "Can you export your data easily (CSV/Excel/API)?",
    ],
    fix: "Start with digitizing logs, forms, and tracking.",
  },
  {
    id: "data_qual",
    title: "Data Quality",
    icon: <CheckCircle2 className="w-6 h-6" />,
    questions: [
      "Is your data complete (few missing entries, consistent usage)?",
      "Is your data clean (correct formats, no duplicates)?",
      "Is your data updated in real time or close to real time?",
    ],
    fix: "Clean up existing databases and enforce data entry standards.",
  },
  {
    id: "process_digi",
    title: "Process Digitalization",
    icon: <Zap className="w-6 h-6" />,
    questions: [
      "Are core workflows digital (attendance, project logs, invoicing, asset tracking)?",
      "Is information shared digitally instead of WhatsApp/phone calls?",
      "Are departments using software consistently and correctly?",
    ],
    fix: "Switch from WhatsApp/manual work to structured project management tools.",
  },
  {
    id: "workflow_auto",
    title: "Workflow Automation",
    icon: <RefreshCcw className="w-6 h-6" />,
    questions: [
      "Are any tasks automated today (reports, approvals, reminders, scheduling)?",
      "Do you use rule-based tools (Zapier, Power Automate, ERP automation)?",
      "Is there a clear opportunity to automate repetitive tasks?",
    ],
    fix: "Implement AI in reports, scheduling, and reminders.",
  },
  {
    id: "team_readiness",
    title: "Team Readiness",
    icon: <CheckCircle2 className="w-6 h-6" />,
    questions: [
      "Do employees understand basic digital tools (Excel, dashboards, forms)?",
      "Are people open or resistant to automation/AI tools?",
      "Do you have at least one “tech-champion” in the company?",
    ],
    fix: "Start training, identify internal champions, and begin AI onboarding.",
  },
  {
    id: "tech_infra",
    title: "Tech Infrastructure",
    icon: <Lock className="w-6 h-6" />,
    questions: [
      "Do you use cloud systems (Google Workspace, Azure, AWS, ERP cloud)?",
      "Is your hardware modern enough to run modern software?",
      "Can your network handle real-time syncing (WiFi, 4G/5G on sites)?",
    ],
    fix: "Migrate critical data to the cloud and upgrade on-site connectivity.",
  },
  {
    id: "budget_roi",
    title: "Budget & ROI Mindset",
    icon: <BarChart3 className="w-6 h-6" />,
    questions: [
      "Do you allocate any budget to digital tools?",
      "Do you evaluate ROI on tools or decisions?",
      "Are you willing to invest for at least 6–12 months to see results?",
    ],
    fix: "Set a small pilot budget to prove ROI before scaling.",
  },
  {
    id: "use_case",
    title: "Use-Case Maturity",
    icon: <Zap className="w-6 h-6" />,
    questions: [
      "Do you have recurring problems that AI can clearly solve?",
      "Are people already trying small AI tools (ChatGPT, Copilot, Excel AI)?",
      "Do you have any documented use cases?",
    ],
    fix: "Build 2–3 fast AI prototypes for recurring problems.",
  },
  {
    id: "leadership",
    title: "Leadership Alignment",
    icon: <CheckCircle2 className="w-6 h-6" />,
    questions: [
      "Does top management understand the value of AI?",
      "Are leaders unified in digital direction?",
      "Are leaders ready to change processes if needed?",
    ],
    fix: "Organize a leadership workshop to align on digital strategy.",
  },
  {
    id: "risk_comp",
    title: "Risk & Compliance",
    icon: <Lock className="w-6 h-6" />,
    questions: [
      "Do you have guidelines for data privacy/security?",
      "Do you comply with local regulations (e.g., Oman ICT standards)?",
      "Do you have processes to audit data access or sensitive information?",
    ],
    fix: "Establish basic data governance and privacy policies.",
  },
];

// --- COMPONENT ---

export default function AiReadinessAudit() {
  const [step, setStep] = useState<"intro" | "quiz" | "results">("intro");
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number[]>>({});

  // Initialize scores structure
  const handleStart = () => {
    const initialScores: Record<string, number[]> = {};
    AUDIT_SECTIONS.forEach((section) => {
      initialScores[section.id] = [null, null, null] as any; // placeholders
    });
    setScores(initialScores);
    setStep("quiz");
  };

  const handleAnswer = (questionIndex: number, value: number) => {
    const sectionId = AUDIT_SECTIONS[currentSectionIndex].id;
    setScores((prev) => {
      const newSectionScores = [...(prev[sectionId] || [])];
      newSectionScores[questionIndex] = value;
      return { ...prev, [sectionId]: newSectionScores };
    });
  };

  const handleNext = () => {
    // Check if current section is complete
    const currentSectionId = AUDIT_SECTIONS[currentSectionIndex].id;
    const currentAnswers = scores[currentSectionId];
    
    if (currentAnswers.includes(null as any) || currentAnswers.length < 3) {
      alert("Please answer all questions in this section.");
      return;
    }

    if (currentSectionIndex < AUDIT_SECTIONS.length - 1) {
      setCurrentSectionIndex((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      setStep("results");
      window.scrollTo(0, 0);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    Object.values(scores).forEach((sectionScores) => {
      sectionScores.forEach((s) => (total += s || 0));
    });
    return total;
  };

  const getResultsData = () => {
    const total = calculateTotal();
    let tier = { label: "", desc: "", color: "" };

    if (total <= 20) {
      tier = {
        label: "Low AI Readiness",
        desc: "No baseline digital foundation. AI will fail without foundational fixes.",
        color: "text-red-600",
      };
    } else if (total <= 40) {
      tier = {
        label: "Medium AI Readiness",
        desc: "Enough structure to start introducing AI. High ROI available for basic automations.",
        color: "text-amber-600",
      };
    } else {
      tier = {
        label: "High AI Readiness",
        desc: "Strong data foundation. Ready for predictive analytics and full workflow automation.",
        color: "text-green-600",
      };
    }

    // Identify Low Hanging Fruit (Sections scoring < 3 out of 6)
    const improvements = AUDIT_SECTIONS.filter((section) => {
      const sectionTotal = (scores[section.id] || []).reduce((a, b) => a + (b || 0), 0);
      return sectionTotal < 3; // "Low" trigger
    }).map((s) => ({ title: s.title, fix: s.fix }));

    return { total, tier, improvements };
  };

  // --- VIEWS ---

  if (step === "intro") {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-brand-surface shadow-soft rounded-2xl p-8 md:p-12 text-center border border-gray-100">
          <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="w-8 h-8 text-brand-blue" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            AI Readiness Scorecard
          </h1>
          <p className="text-lg text-brand-text mb-8">
            A 10-minute diagnostic for SMEs. Discover your data maturity, process
            efficiency, and hidden AI opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
            <div className="p-4 bg-brand-light rounded-lg">
              <div className="font-semibold text-brand-navy mb-1">1. Assess</div>
              <div className="text-sm text-gray-600">Analyze 10 key operational areas.</div>
            </div>
            <div className="p-4 bg-brand-light rounded-lg">
              <div className="font-semibold text-brand-navy mb-1">2. Score</div>
              <div className="text-sm text-gray-600">Get your readiness score out of 60.</div>
            </div>
            <div className="p-4 bg-brand-light rounded-lg">
              <div className="font-semibold text-brand-navy mb-1">3. Roadmap</div>
              <div className="text-sm text-gray-600">Receive a tailored action plan.</div>
            </div>
          </div>
          <button
            onClick={handleStart}
            className="w-full md:w-auto px-8 py-3 bg-brand-navy text-white font-medium rounded-lg hover:bg-brand-blue transition-colors shadow-glow"
          >
            Start Assessment
          </button>
        </div>
      </div>
    );
  }

  if (step === "quiz") {
    const currentSection = AUDIT_SECTIONS[currentSectionIndex];
    const progress = ((currentSectionIndex) / AUDIT_SECTIONS.length) * 100;

    return (
      <div className="min-h-screen py-10 px-4 flex justify-center">
        <div className="max-w-3xl w-full">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm font-medium text-brand-text mb-2">
              <span>Section {currentSectionIndex + 1} of {AUDIT_SECTIONS.length}</span>
              <span>{Math.round(progress)}% Completed</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-blue transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-brand-surface shadow-soft rounded-2xl p-6 md:p-10 border border-gray-100">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
              <div className="p-3 bg-brand-light rounded-lg text-brand-blue">
                {currentSection.icon}
              </div>
              <h2 className="text-2xl font-bold text-brand-heading">
                {currentSection.title}
              </h2>
            </div>

            <div className="space-y-8">
              {currentSection.questions.map((q, qIdx) => {
                const currentVal = scores[currentSection.id]?.[qIdx];
                return (
                  <div key={qIdx} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <label className="block text-brand-heading font-medium text-lg mb-4">
                      {q}
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { val: 0, label: "Not in place" },
                        { val: 1, label: "Partially in place" },
                        { val: 2, label: "Strong / Fully in place" },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          onClick={() => handleAnswer(qIdx, opt.val)}
                          className={`
                            py-3 px-4 rounded-lg border text-sm font-medium transition-all text-center
                            ${
                              currentVal === opt.val
                                ? "border-brand-blue bg-brand-blue text-white shadow-md transform scale-[1.02]"
                                : "border-gray-200 text-gray-600 hover:border-brand-blue/50 hover:bg-brand-light"
                            }
                          `}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex justify-end">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-8 py-3 bg-brand-navy text-white font-medium rounded-lg hover:bg-brand-blue transition-colors"
              >
                {currentSectionIndex === AUDIT_SECTIONS.length - 1
                  ? "Finish Assessment"
                  : "Next Section"}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "results") {
    const { total, tier, improvements } = getResultsData();

    return (
      <div className="min-h-screen py-10 px-4 flex justify-center">
        <div className="max-w-3xl w-full animate-in zoom-in-95 duration-500">
          <div className="bg-brand-surface shadow-soft rounded-2xl overflow-hidden border border-gray-100">
            {/* Header Score */}
            <div className="bg-brand-navy p-8 md:p-12 text-center text-white relative overflow-hidden">
               {/* Decorative glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-blue/20 to-transparent pointer-events-none"></div>
              
              <h2 className="text-xl font-medium text-gray-300 mb-6 uppercase tracking-widest">
                Your AI Readiness Score
              </h2>
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-white/20 bg-white/10 backdrop-blur-sm mb-6">
                <span className="text-5xl font-bold">{total}</span>
                <span className="text-xl text-gray-300 ml-1">/60</span>
              </div>
              <h3 className={`text-3xl font-bold mb-2`}>{tier.label}</h3>
              <p className="max-w-lg mx-auto text-gray-300">{tier.desc}</p>
            </div>

            <div className="p-8 md:p-12">
              {/* Recommendations */}
              <div className="mb-10">
                <h4 className="flex items-center gap-2 text-xl font-bold text-brand-heading mb-6">
                  <AlertCircle className="text-brand-blue" />
                  Low-Hanging Fruit & Priority Actions
                </h4>
                
                {improvements.length > 0 ? (
                  <div className="grid gap-4">
                    {improvements.map((imp, idx) => (
                      <div key={idx} className="flex gap-4 p-4 bg-brand-light rounded-lg border-l-4 border-brand-blue">
                        <div className="flex-1">
                          <h5 className="font-bold text-brand-navy text-sm uppercase tracking-wide mb-1">
                            {imp.title}
                          </h5>
                          <p className="text-brand-text text-sm">{imp.fix}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 bg-green-50 border border-green-100 rounded-lg text-green-800 text-center">
                    <p>🎉 Amazing! You have a very strong foundation across all areas.</p>
                  </div>
                )}
              </div>

              {/* CTA Section */}
              <div className="bg-brand-heading text-white rounded-xl p-8 text-center shadow-lg">
                <h4 className="text-2xl font-bold mb-4">Ready to implement these changes?</h4>
                <p className="text-gray-300 mb-6">
                  Don't let this roadmap sit in a drawer. Let's build your AI strategy together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-6 py-3 bg-brand-blue hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
                  >
                    Book a Discovery Call
                  </a>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 bg-transparent border border-gray-600 hover:bg-white/5 text-white font-medium rounded-lg transition-colors"
                  >
                    Retake Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}