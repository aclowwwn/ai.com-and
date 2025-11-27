"use client";

import React from "react";
import { Mail, MapPin, Phone, CheckCircle2, ArrowRight, Clock, Calendar } from "lucide-react";
import { SimpleNavbar } from "../page";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-light">
      <SimpleNavbar />
      {/* 1. HERO SECTION */}
      <div className="bg-brand-navy pt-20 pb-32 px-4 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s Build Your <span className="text-brand-blue">Digital Roadmap</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stop guessing. Book a 30-minute discovery call to identify where AI and automation can save you time and money immediately.
          </p>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20 relative z-20">
        <div className="bg-brand-surface rounded-2xl shadow-soft border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* LEFT: WHY BOOK? & CONTACT INFO */}
          <div className="p-8 lg:p-12 w-full lg:w-5/12 bg-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-brand-heading mb-6">
                What to expect
              </h3>
              
              {/* Value Props List */}
              <ul className="space-y-6 mb-12">
                <li className="flex gap-4">
                  <div className="mt-1 bg-green-50 p-2 rounded-full text-green-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-heading">Zero-Pressure Discovery</h4>
                    <p className="text-sm text-gray-600">We discuss your current bottlenecks. No hard selling.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-blue-50 p-2 rounded-full text-brand-blue">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-heading">Actionable Advice</h4>
                    <p className="text-sm text-gray-600">Walk away with at least one automation idea you can use today.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-indigo-50 p-2 rounded-full text-indigo-600">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-heading">Clear ROI Estimation</h4>
                    <p className="text-sm text-gray-600">We'll tell you if AI is actually worth the investment for you.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Direct Contact Details */}
            <div className="border-t border-gray-100 pt-8">
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Alternative Ways to Connect
              </h4>
              <div className="space-y-4">
                <a href="mailto:hello@com-and.com" className="flex items-center gap-3 text-brand-heading hover:text-brand-blue transition-colors group">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-brand-blue" />
                  <span>hello@com-and.com</span>
                </a>
                <a href="tel:+96800000000" className="flex items-center gap-3 text-brand-heading hover:text-brand-blue transition-colors group">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-brand-blue" />
                  <span>+968 1234 5678</span>
                </a>
                <div className="flex items-center gap-3 text-brand-text">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span>Muscat, Sultanate of Oman</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CALENDAR EMBED */}
          <div className="w-full lg:w-7/12 bg-gray-50 p-4 lg:p-8 border-l border-gray-100">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-[600px] lg:h-full overflow-hidden relative">
              
              {/* INSTRUCTION: Replace the src below with your actual Calendly/Cal.com embed URL */}
              {/* Usually looks like: https://calendly.com/yourname/30min */}
              <iframe 
                src="https://calendly.com/com-and/30min?hide_event_type_details=1&hide_gdpr_banner=1" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                title="Schedule a call"
                className="w-full h-full"
              ></iframe>

              {/* Loading State (Optional visual polish) */}
              <div className="absolute inset-0 flex items-center justify-center -z-10 text-gray-400">
                Loading calendar...
              </div>

            </div>
          </div>

        </div>

        {/* 3. TRUST FOOTER (Optional) */}
        {/* <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">Join forward-thinking companies in Oman</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
          </div>
        </div> */}

      </div>
    </div>
  );
}