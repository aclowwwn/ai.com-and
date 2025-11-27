import React from 'react';
import {
  ArrowRight, BarChart3, Cpu, Users, Wrench,
  CalendarClock, MessageSquare, ClipboardList,
  Calculator, Zap, Check, ChevronRight
} from 'lucide-react';
import { Hero } from '@/components/hero';

export const Navbar = () => (
  <nav className="fixed w-full z-50 top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 h-20 flex items-center">
    <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
      <a href="/" className='cursor-pointer'>
        <div className="flex items-center gap-2">
          <div className="bg-brand-blue text-white font-bold p-1.5 rounded text-lg">c&</div>
          <span className="text-xl font-bold text-brand-heading tracking-tight">com&</span>
        </div>
      </a>
      <div className="hidden md:flex gap-8 font-medium text-sm text-slate-600">
        <a href="#expertise" className="hover:text-brand-blue transition">Expertise</a>
        <a href="#solutions" className="hover:text-brand-blue transition">Solutions</a>
        <a href="#packages" className="hover:text-brand-blue transition">Engagement Models</a>
        {/* <a href="/roadmap" className="hover:text-brand-blue transition">Roadmap</a> */}
      </div>
      <a href="/contact" className="bg-brand-heading text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-brand-blue transition shadow-lg">
        Schedule Consultation
      </a>
    </div>
  </nav>
);

export const SimpleNavbar = () => (
  <nav className="fixed w-full z-50 top-0 bg-transparent backdrop-blur-md h-20 flex items-center">
    <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
      <a href="/" className='cursor-pointer'>
        <div className="flex items-center gap-2">
          <div className="bg-brand-blue text-white font-bold p-1.5 rounded text-lg">c&</div>
        </div>
      </a>
      <div className="hidden md:flex gap-8 font-medium text-sm text-slate-600">
      </div>
      <a href="/contact" className="bg-brand-heading text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-brand-blue transition shadow-lg">
        Schedule Consultation
      </a>
    </div>
  </nav>
);


const OldHero = () => (
  <header className="pt-32 pb-20 px-6 relative overflow-hidden">
    {/* Abstract Background Blob */}
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

    <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          AI Implementation Partner for Oman
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
          Turn Artificial Intelligence into <br />
          <span className="bg-gradient-to-br from-brand-heading to-brand-blue bg-clip-text text-transparent">Measurable ROI.</span>
        </h1>
        <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
          We bridge the gap between AI hype and operational reality. We audit, build, and deploy intelligent systems that reduce costs and optimize infrastructure.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#audit" className="bg-brand-blue text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-blue/80 transition shadow-glow flex items-center gap-2">
            Get Your Readiness Score <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#solutions" className="bg-white border border-slate-200 text-brand-heading px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-50 transition">
            Explore Solutions
          </a>
        </div>
      </div>

      {/* Hero Visual Dashboard */}
      <div className="relative hidden lg:block">
        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 relative z-10">
          <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
            <div className="font-bold text-slate-800">Operational Efficiency Projection</div>
            <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-bold">+24% Efficiency</div>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Fleet Uptime', val: '85%', width: 'w-[85%]', color: 'bg-blue-500' },
              { label: 'Fuel Savings', val: '-18%', width: 'w-[40%]', color: 'bg-emerald-500' },
              { label: 'Admin Hours', val: '-92%', width: 'w-[92%]', color: 'bg-indigo-500' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-24 text-xs font-semibold text-slate-500">{item.label}</div>
                <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} ${item.width} rounded-full`}></div>
                </div>
                <div className="text-xs font-bold text-slate-800">{item.val}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-4">
            <div className="flex-1 bg-slate-50 p-3 rounded border border-slate-100 text-center">
              <div className="text-xs text-slate-400 uppercase tracking-wide">Breakdowns Avoided</div>
              <div className="text-xl font-bold text-brand-heading">14</div>
            </div>
            <div className="flex-1 bg-slate-50 p-3 rounded border border-slate-100 text-center">
              <div className="text-xs text-slate-400 uppercase tracking-wide">Costs Saved</div>
              <div className="text-xl font-bold text-brand-heading">OMR 12k</div>
            </div>
          </div>
        </div>
        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-brand-blue rounded-2xl opacity-10 rotate-3"></div>
      </div>
    </div>
  </header>
);

const Expertise = () => (
  <section id="expertise" className="py-24 bg-white border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-brand-heading mb-4">We Engineer Business Outcomes</h2>
      <p className="text-slate-500 max-w-2xl mx-auto mb-16">
        We don&apos;t just implement technology; we optimize operations. Our methodology focuses on tangible metrics: uptime, cost reduction, and workforce productivity.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: BarChart3, color: "text-brand-blue bg-blue-100", title: "Strategic Audits", desc: "We analyze your data landscape to find hidden inefficiencies and high-value AI opportunities before writing a single line of code." },
          { icon: Cpu, color: "text-emerald-600 bg-emerald-100", title: "Custom AI Models", desc: "From predictive maintenance engines to automated scheduling bots, we build secure, proprietary models tailored to your fleet." },
          { icon: Users, color: "text-indigo-600 bg-indigo-100", title: "Change Management", desc: "Technology fails without adoption. We train your supervisors and staff to ensure the new tools actually get used." },
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100 text-left group">
            <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
              <item.icon />
            </div>
            <h3 className="text-xl font-bold text-brand-heading mb-3">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Solutions = () => (
  <section id="solutions" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold text-brand-heading">Core Solutions</h2>
          <p className="text-slate-500 mt-2">Proven modules ready for deployment.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Wrench, title: "Predictive Maintenance", desc: "Analyze telemetry to predict equipment failure weeks in advance, reducing emergency repair costs.", badge: "30% Downtime Reduction" },
          { icon: CalendarClock, title: "Scheduling Optimizer", desc: "AI algorithms that allocate crews and machinery to remote sites to minimize travel and idle time.", badge: "100% Resource Visibility", iconName: "check-circle" },
          { icon: MessageSquare, title: "Automated Reporting", desc: "Convert WhatsApp voice notes from supervisors into structured, compliant PDF logs instantly.", badge: "90% Less Paperwork" },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow-soft p-8 border border-slate-100 hover:shadow-lg transition">
            <div className="text-brand-blue mb-4"><item.icon className="w-8 h-8" /></div>
            <h3 className="text-lg font-bold text-brand-heading mb-2">{item.title}</h3>
            <p className="text-sm text-slate-500 mb-6">{item.desc}</p>
            <div className="inline-flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              <Check className="w-3 h-3 mr-1" /> {item.badge}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Incentives = () => (
  <section id="audit" className="py-24 bg-brand-heading text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Start with Value, Not Invoices</h2>
        <p className="text-slate-400 max-w-xl mx-auto">We believe in proving ROI before full commitment. Access our free executive tools to diagnose your opportunities.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: ClipboardList, color: "text-blue-400 bg-brand-blue/20", title: "AI Readiness Scorecard", desc: "A 10-minute diagnostic to evaluate your data maturity and identify low-hanging fruit.", cta: "Start Assessment", link: "/audit" },
          { icon: Calculator, link: "/calculator", color: "text-emerald-400 bg-emerald-600/20", title: "Cost Savings Calculator", desc: "Input fleet size and fuel spend to see exactly how much OMR you are losing to inefficiency.", cta: "Calculate ROI" },
          { icon: Zap, link: "/", color: "text-purple-400 bg-purple-600/20", title: "Proof of Value Pilot", desc: "Give us data for ONE machine. We will predict its next breakdown. Zero cost test.", cta: "Coming soon" },
        ].map((item, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/15 transition cursor-pointer">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded ${item.color}`}><item.icon size={20} /></div>
              <h3 className="font-bold">{item.title}</h3>
            </div>
            <p className="text-sm text-slate-300 mb-4">{item.desc}</p>
            <a href={item.link}>
              <span className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${item.color.split(' ')[0]}`}>
                {item.cta} <ChevronRight className="w-3 h-3" />
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Packages = () => (
  <section id="packages" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-brand-heading text-center mb-16">Engagement Models</h2>

      <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Discovery */}
        <div className="border border-slate-200 rounded-2xl p-8 flex flex-col hover:border-brand-blue">
          <div className="mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Discovery</span>
            <h3 className="text-2xl font-bold text-brand-heading">Audit & Strategy</h3>
          </div>
          <p className="text-slate-500 text-sm mb-8">For companies needing to map their data landscape and ROI potential.</p>
          <ul className="space-y-4 mb-8 flex-1">
            {['Data Quality Audit', 'Use Case Identification', 'Implementation Roadmap'].map((feat, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                <Check className="w-5 h-5 text-brand-blue shrink-0" /> {feat}
              </li>
            ))}
          </ul>
          <a href="/contact" className="w-full block text-center py-3 border border-slate-200 rounded-lg font-semibold text-brand-heading hover:border-brand-blue hover:text-brand-blue transition">Contact for Pricing</a>
        </div>

        {/* Execution */}
        <div className="border-2 border-brand-blue rounded-2xl p-8 flex flex-col relative shadow-xl transform lg:-translate-y-4 bg-white">
          <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">RECOMMENDED</div>
          <div className="mb-4">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">Execution</span>
            <h3 className="text-2xl font-bold text-brand-heading">Pilot Program</h3>
          </div>
          <p className="text-slate-500 text-sm mb-8">Deploy one core model to prove value in a live environment.</p>
          <ul className="space-y-4 mb-8 flex-1">
            {['Everything in Discovery', '1 Live AI Model (e.g. Maintenance)', 'Supervisor Training', 'ROI Validation Report'].map((feat, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                <Check className="w-5 h-5 text-brand-blue shrink-0" /> {feat}
              </li>
            ))}
          </ul>
          <a href="/" className="w-full block text-center py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-blue/80 transition shadow-lg shadow-blue-200">Pilot Coming Soon</a>
        </div>

        {/* Scale */}
        <div className="border border-slate-200 rounded-2xl p-8 flex flex-col hover:border-brand-blue">
          <div className="mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Scale</span>
            <h3 className="text-2xl font-bold text-brand-heading">Transformation</h3>
          </div>
          <p className="text-slate-500 text-sm mb-8">Full-scale deployment across all sites, fleets, and departments.</p>
          <ul className="space-y-4 mb-8 flex-1">
            {['Fleet-wide Deployment', 'Custom ERP Integration', 'Ongoing Model Retraining'].map((feat, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                <Check className="w-5 h-5 text-brand-blue shrink-0" /> {feat}
              </li>
            ))}
          </ul>
          <a href="/contact" className="w-full block text-center py-3 border border-slate-200 rounded-lg font-semibold text-brand-heading hover:border-brand-blue hover:text-brand-blue transition">Contact Sales</a>
        </div>
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-brand-heading text-white py-16">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <a href="/">
            <div className="bg-brand-blue text-white font-bold p-1 rounded">c&</div>
          </a>
          <a href="/">
            <span className="text-xl font-bold tracking-tight">com&</span>
          </a>
        </div>
        <p className="text-slate-400 text-sm max-w-sm mb-6">
          Empowering enterprises with intelligence. We build the systems that build the future.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Solutions</h4>
        <ul className="space-y-2 text-sm text-slate-400">
          <li><a href="#" className="hover:text-white transition">Predictive Maintenance</a></li>
          <li><a href="#" className="hover:text-white transition">Logistics Optimization</a></li>
          <li><a href="#" className="hover:text-white transition">Process Automation</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-slate-400">
          <li><a href="#" className="hover:text-white transition">About Us</a></li>
          <li><a href="#" className="hover:text-white transition">Careers</a></li>
          <li><a href="#" className="hover:text-white transition">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
      &copy; 2025 com& Technologies. All rights reserved.
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Expertise />
      <Solutions />
      <Incentives />
      <Packages />
      <Footer />
    </main>
  );
}