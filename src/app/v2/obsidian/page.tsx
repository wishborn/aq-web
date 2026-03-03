"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BarChart3,
  Gem,
  TrendingUp,
  Users,
  Home,
  DollarSign,
  Search,
  FileText,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
} from "lucide-react";

const FOUNDING_YEAR = 2007;
const yearsInBusiness = new Date().getFullYear() - FOUNDING_YEAR;

const stats = [
  { value: `${yearsInBusiness}+`, label: "Years in Business" },
  { value: "$2B+", label: "Assets Managed" },
  { value: "500+", label: "Acquisitions Closed" },
  { value: "FL", label: "Southeast US Focus" },
];

const verticals = [
  {
    icon: Home,
    label: "SFR / BTR",
    description:
      "Single-Family Rentals and Build-To-Rent homes are among the most secure asset classes. We create new opportunities for investors in the growing BTR markets.",
  },
  {
    icon: DollarSign,
    label: "Capital Deployment",
    description:
      "Capital deployment decisions are among the most important strategic choices. We're ready to assist you in making the best decision for your portfolio.",
  },
  {
    icon: Search,
    label: "Acquisitions",
    description:
      "We focus on assembling assets for our clients, with custom-built proprietary software that makes us efficient and automated in our approach.",
  },
  {
    icon: FileText,
    label: "Debt Service",
    description:
      "Cutting-edge solutions to help you locate and recover your tax collector debt assets in a timely, strategic manner.",
  },
];

const values = [
  { icon: BarChart3, label: "Transparency" },
  { icon: Gem, label: "Integrity" },
  { icon: TrendingUp, label: "Results Driven" },
  { icon: Users, label: "Client First" },
];

export default function ObsidianDesign() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeVertical, setActiveVertical] = useState(0);

  return (
    <div className="bg-[#0D0D0D] text-white font-sans min-h-screen">
      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0D0D0D]/90 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18 py-4">
          <Link href="/v2/obsidian">
            <Image
              src="/images/logo.png"
              alt="Asset Quest"
              width={140}
              height={60}
              className="h-12 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-10">
            {["Our Focus", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-xs font-semibold tracking-[0.2em] uppercase text-[#888] hover:text-[#C9A84C] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-xs font-bold tracking-[0.15em] uppercase px-5 py-2.5 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black transition-all"
              >
                Get in Touch
              </a>
            </li>
          </ul>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden bg-[#111] border-t border-white/5 px-6 py-6 flex flex-col gap-5">
            {["Our Focus", "Contact", "Get in Touch"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs font-semibold tracking-[0.2em] uppercase text-[#888] hover:text-[#C9A84C]"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, #ffffff 40px, #ffffff 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #ffffff 40px, #ffffff 41px)",
          }}
        />

        {/* Gold gradient accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#C9A84C]/8 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#C9A84C]/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
                Est. 2007 · Fort Myers, FL
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
              Real Estate
              <br />
              <span className="text-[#C9A84C]">Investment</span>
              <br />
              Redefined.
            </h1>

            <p className="text-[#888] text-lg lg:text-xl leading-relaxed max-w-xl mb-12">
              {yearsInBusiness}+ years of acquiring, managing, and growing
              real estate investment portfolios across the Southeast United
              States.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#focus"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-black text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#e0bb5c] transition-colors"
              >
                Our Focus <ArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-xs font-bold tracking-[0.15em] uppercase hover:border-white/50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────────── */}
      <section className="border-y border-white/5 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
            {stats.map((s) => (
              <div key={s.label} className="py-10 px-8 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C9A84C] mb-2">
                  {s.value}
                </div>
                <div className="text-[#555] text-xs font-semibold uppercase tracking-[0.2em]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left — text */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
                  Who We Are
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                A firm built on{" "}
                <span className="text-[#C9A84C]">precision</span> and{" "}
                <span className="text-[#C9A84C]">performance.</span>
              </h2>
              <p className="text-[#777] text-lg leading-relaxed mb-6">
                Founded in 2007 by Daniel Barres, Asset Quest has become a
                leading real estate investment firm, specializing in the
                acquisition, management, marketing, and sales of improved
                residential lots, commercial properties, and multi-family homes.
              </p>
              <p className="text-[#777] text-lg leading-relaxed">
                Located in Southwest Florida, Asset Quest is positioned to
                capitalize on the expansive growth and investment opportunities
                that Florida and the broader Southeast region continue to offer.
              </p>
            </div>

            {/* Right — value pillars */}
            <div className="grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group p-8 border border-white/5 hover:border-[#C9A84C]/30 bg-[#111] hover:bg-[#141414] transition-all"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-[#C9A84C]/30 group-hover:border-[#C9A84C] mb-6 transition-colors">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VERTICALS ───────────────────────────────────────────────── */}
      <section id="focus" className="py-24 lg:py-36 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
              Our Focus
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 max-w-xl">
            What we invest in.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Tab buttons */}
            <div className="flex flex-col gap-2">
              {verticals.map((v, i) => {
                const Icon = v.icon;
                return (
                  <button
                    key={v.label}
                    onClick={() => setActiveVertical(i)}
                    className={`flex items-center gap-5 px-6 py-5 text-left transition-all border ${
                      activeVertical === i
                        ? "border-[#C9A84C]/50 bg-[#C9A84C]/5"
                        : "border-white/5 bg-[#111] hover:border-white/15"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 flex items-center justify-center border transition-colors ${
                        activeVertical === i
                          ? "border-[#C9A84C] text-[#C9A84C]"
                          : "border-white/15 text-[#555]"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <span
                      className={`font-bold text-sm tracking-wide uppercase ${
                        activeVertical === i ? "text-[#C9A84C]" : "text-[#666]"
                      }`}
                    >
                      {v.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Description panel */}
            <div className="border border-white/5 bg-[#111] p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                {verticals[activeVertical].label}
              </h3>
              <p className="text-[#888] text-lg leading-relaxed">
                {verticals[activeVertical].description}
              </p>
              <div className="mt-8 pt-8 border-t border-white/5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase hover:gap-3 transition-all"
                >
                  Discuss This With Us <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
                  Contact
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Let&apos;s talk.
              </h2>
              <p className="text-[#777] text-lg leading-relaxed mb-12">
                Whether you&apos;re an investor, partner, or exploring
                opportunities in the Southeast US real estate market — we want
                to hear from you.
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#C9A84C]/30 flex items-center justify-center">
                    <Phone size={16} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#555] text-xs uppercase tracking-wider mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:2395418448"
                      className="text-white text-sm font-semibold hover:text-[#C9A84C] transition-colors"
                    >
                      239-541-8448
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#C9A84C]/30 flex items-center justify-center">
                    <Mail size={16} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="text-[#555] text-xs uppercase tracking-wider mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:info@assetquest.com"
                      className="text-white text-sm font-semibold hover:text-[#C9A84C] transition-colors"
                    >
                      info@assetquest.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="border border-white/5 bg-[#111] p-10">
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#555] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#0D0D0D] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C]/50 placeholder:text-[#333]"
                      placeholder="Daniel"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#555] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#0D0D0D] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C]/50 placeholder:text-[#333]"
                      placeholder="Barres"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#555] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-[#0D0D0D] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C]/50 placeholder:text-[#333]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#555] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-[#0D0D0D] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C]/50 placeholder:text-[#333] resize-none"
                    placeholder="Tell us what you're working on..."
                  />
                </div>
                <button className="w-full py-4 bg-[#C9A84C] text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#e0bb5c] transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-xs">
            © {new Date().getFullYear()} Asset Quest, LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[#444] text-xs hover:text-[#C9A84C] transition-colors"
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
          className="flex items-center gap-2 bg-[#111] border border-white/10 text-[#888] hover:text-white hover:border-white/30 text-xs font-semibold px-4 py-2.5 transition-all"
        >
          ← Back to designs
        </Link>
      </div>
    </div>
  );
}
