"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BarChart3,
  Gem,
  TrendingUp,
  Users,
  Mail,
  ClipboardCheck,
  Home,
  DollarSign,
  Search,
  FileText,
  ArrowRight,
  Menu,
  X,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

const stats = [
  { value: "19+", label: "Years of Expertise" },
  { value: "$2B+", label: "Assets Under Management" },
  { value: "500+", label: "Transactions Closed" },
  { value: "4", label: "Investment Verticals" },
];

const verticals = [
  {
    icon: Home,
    label: "SFR / BTR",
    badge: "Core Strategy",
    description:
      "Single-Family Rentals and Build-To-Rent homes are among the most secure asset classes. We create new opportunities for investors in Florida's growing BTR markets.",
    color: "#EFF6FF",
    iconColor: "#1D77D1",
  },
  {
    icon: DollarSign,
    label: "Capital Deployment",
    badge: "Strategic",
    description:
      "Capital deployment decisions are among the most important strategic choices. We help you navigate with confidence and precision.",
    color: "#F0FDF4",
    iconColor: "#16A34A",
  },
  {
    icon: Search,
    label: "Acquisitions",
    badge: "Proprietary Tech",
    description:
      "Proprietary software built over 15+ years makes us uniquely efficient and automated in how we identify and close target acquisitions.",
    color: "#F5F3FF",
    iconColor: "#7C3AED",
  },
  {
    icon: FileText,
    label: "Debt Service",
    badge: "Specialized",
    description:
      "Cutting-edge solutions to help clients locate and recover tax collector debt assets in a timely, strategic manner.",
    color: "#FFFBEB",
    iconColor: "#D97706",
  },
];

const qualities = [
  { icon: BarChart3, label: "Transparency" },
  { icon: Mail, label: "Market Guidance" },
  { icon: ClipboardCheck, label: "Efficiency" },
  { icon: Gem, label: "Integrity" },
  { icon: TrendingUp, label: "Results Driven" },
  { icon: Users, label: "Client Oriented" },
];

export default function CoastalDesign() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background: "#F8FAFF",
        color: "#0A2540",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#E8F0FE]">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18 py-4">
          <Link href="/v2/coastal">
            <Image
              src="/images/logo.png"
              alt="Asset Quest"
              width={130}
              height={55}
              className="h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {["Our Focus", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm font-medium text-[#4A6280] hover:text-[#0A2540] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-sm font-semibold px-5 py-2.5 rounded-full bg-[#0A2540] text-white hover:bg-[#1D77D1] transition-colors"
              >
                Get in Touch
              </a>
            </li>
          </ul>

          <button
            className="md:hidden text-[#0A2540]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-[#E8F0FE] px-6 py-6 flex flex-col gap-5">
            {["Our Focus", "Contact", "Get in Touch"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-[#4A6280] hover:text-[#0A2540]"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Right-half background — exactly 50% so it never bleeds over text */}
        <div
          className="absolute top-0 right-0 h-full"
          style={{
            width: "50%",
            background:
              "linear-gradient(145deg, #0A2540 0%, #1D77D1 60%, #3B8FE8 100%)",
          }}
        />

        {/* Decorative circles — kept within right half */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/5 blur-sm pointer-events-none" />
        <div className="absolute bottom-20 right-40 w-40 h-40 rounded-full bg-[#3B8FE8]/30 blur-xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — text always on white side */}
            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
                style={{ background: "#E8F0FE", color: "#1D77D1" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D77D1]" />
                Est. 2007 · Fort Myers, FL
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-[#0A2540]">
                Smarter Real Estate
                <br />
                <span className="text-[#1D77D1]">Investment.</span>
              </h1>

              <p className="text-[#4A6280] text-lg leading-relaxed mb-10" style={{ maxWidth: "28rem" }}>
                19+ years acquiring, managing, and growing portfolios across the
                Southeast United States — guided by proprietary technology and
                deep market expertise.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#focus"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A2540] text-white text-sm font-semibold hover:bg-[#1D77D1] transition-colors"
                >
                  Explore Our Focus <ArrowRight size={15} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#0A2540]/20 text-[#0A2540] text-sm font-semibold hover:border-[#1D77D1] hover:text-[#1D77D1] transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right — floating stats cards over the blue panel */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-2xl p-7 ${
                    i % 2 === 0
                      ? "bg-white shadow-xl border border-[#E8F0FE]"
                      : "bg-white/10 backdrop-blur-sm border border-white/20"
                  }`}
                >
                  <div
                    className={`text-3xl font-bold mb-1 ${
                      i % 2 === 0 ? "text-[#0A2540]" : "text-white"
                    }`}
                  >
                    {s.value}
                  </div>
                  <div
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      i % 2 === 0 ? "text-[#4A6280]" : "text-white/60"
                    }`}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left — qualities */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {qualities.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group p-6 rounded-2xl border border-[#E8F0FE] hover:border-[#1D77D1]/30 hover:shadow-lg transition-all bg-[#F8FAFF] hover:bg-white text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E8F0FE] group-hover:bg-[#1D77D1]/10 flex items-center justify-center mb-4 mx-auto transition-colors">
                    <Icon className="w-5 h-5 text-[#1D77D1]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wide text-[#0A2540]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Right — text */}
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#1D77D1] mb-5">
                Who We Are
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8 text-[#0A2540]">
                Florida&apos;s trusted investment partner.
              </h2>
              <p className="text-[#4A6280] text-lg leading-relaxed mb-6">
                Founded in 2007 by Daniel Barres, Asset Quest is a leading real
                estate investment firm specializing in the acquisition,
                management, marketing, and sales of residential lots, commercial
                properties, and multi-family homes.
              </p>
              <p className="text-[#4A6280] text-lg leading-relaxed mb-10">
                Located in Southwest Florida, we are uniquely positioned to
                capitalize on the region&apos;s expansive growth and investment
                opportunities.
              </p>
              <a
                href="#focus"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1D77D1] hover:gap-3 transition-all"
              >
                Explore our investment focus <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── VERTICALS ───────────────────────────────────────────────── */}
      <section id="focus" className="py-24 lg:py-36 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#1D77D1] mb-5">
              Our Focus
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-5">
              What we invest in.
            </h2>
            <p className="text-[#4A6280] text-lg max-w-xl mx-auto">
              Defensible strategies in growing markets with tangible performance
              improvement opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {verticals.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.label}
                  className="group rounded-2xl p-8 border border-[#E8F0FE] hover:border-[#1D77D1]/20 hover:shadow-xl transition-all bg-white"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: v.color }}
                    >
                      <Icon className="w-5 h-5" style={{ color: v.iconColor }} />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F8FAFF] text-[#4A6280] border border-[#E8F0FE]">
                      {v.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                    {v.label}
                  </h3>
                  <p className="text-[#4A6280] leading-relaxed text-sm">
                    {v.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-[#E8F0FE]">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D77D1] group-hover:gap-2.5 transition-all"
                    >
                      Learn more <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────────────────── */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, #0A2540 0%, #1D77D1 70%, #3B8FE8 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to invest smarter?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Whether you&apos;re an investor, a partner, or exploring
            opportunities in Southeast US real estate — let&apos;s talk.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-[#0A2540] text-sm font-bold hover:shadow-xl hover:shadow-black/20 transition-all"
          >
            Start the Conversation <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#1D77D1] mb-5">
                Contact Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-8">
                Let&apos;s build something together.
              </h2>
              <p className="text-[#4A6280] text-lg leading-relaxed mb-12">
                Our team is ready to help you identify the right investment
                strategy for your goals.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F0FE] flex items-center justify-center">
                    <Phone size={18} className="text-[#1D77D1]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#4A6280] mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:2395418448"
                      className="text-[#0A2540] font-bold hover:text-[#1D77D1] transition-colors"
                    >
                      239-541-8448
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F0FE] flex items-center justify-center">
                    <Mail size={18} className="text-[#1D77D1]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#4A6280] mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@assetquest.com"
                      className="text-[#0A2540] font-bold hover:text-[#1D77D1] transition-colors"
                    >
                      info@assetquest.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F0FE] flex items-center justify-center">
                    <MapPin size={18} className="text-[#1D77D1]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#4A6280] mb-1">
                      Office
                    </p>
                    <p className="text-[#0A2540] font-bold">
                      2180 W. First St, Suite 302
                      <br />
                      Fort Myers, FL 33901
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="rounded-3xl border border-[#E8F0FE] p-10 bg-[#F8FAFF]">
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A6280] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl bg-white border border-[#E8F0FE] text-[#0A2540] px-4 py-3 text-sm focus:outline-none focus:border-[#1D77D1] placeholder:text-[#B0BDD0]"
                      placeholder="Daniel"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A6280] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl bg-white border border-[#E8F0FE] text-[#0A2540] px-4 py-3 text-sm focus:outline-none focus:border-[#1D77D1] placeholder:text-[#B0BDD0]"
                      placeholder="Barres"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A6280] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl bg-white border border-[#E8F0FE] text-[#0A2540] px-4 py-3 text-sm focus:outline-none focus:border-[#1D77D1] placeholder:text-[#B0BDD0]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A6280] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl bg-white border border-[#E8F0FE] text-[#0A2540] px-4 py-3 text-sm focus:outline-none focus:border-[#1D77D1] placeholder:text-[#B0BDD0] resize-none"
                    placeholder="Tell us about your investment goals..."
                  />
                </div>
                <button className="w-full py-4 rounded-xl bg-[#0A2540] text-white text-sm font-bold hover:bg-[#1D77D1] transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-[#0A2540] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © 2025 Asset Quest, LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-white/40 text-xs hover:text-white/70 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── BACK LINK ───────────────────────────────────────────────── */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link
          href="/v2"
          className="flex items-center gap-2 bg-white border border-[#E8F0FE] shadow-lg text-[#4A6280] hover:text-[#0A2540] hover:border-[#1D77D1]/30 text-xs font-semibold px-4 py-2.5 rounded-full transition-all"
        >
          ← Back to designs
        </Link>
      </div>
    </div>
  );
}
