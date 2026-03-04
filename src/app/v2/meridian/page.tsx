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
  Check,
} from "lucide-react";

// ── Palette ────────────────────────────────────────────────────────────────
// Background:   #FFFFFF / #F8F9FB (near-white slate)
// Primary:      #0F172A  (almost-black slate)
// Accent:       #2563EB  (electric blue)
// Accent soft:  #DBEAFE  (blue-50)
// Muted:        #64748B  (slate-500)
// Border:       #E2E8F0  (slate-200)
// ──────────────────────────────────────────────────────────────────────────

const stats = [
  { value: "19+", label: "Years in Business" },
  { value: "$2B+", label: "Assets Managed" },
  { value: "500+", label: "Closed Transactions" },
  { value: "100%", label: "Florida Focused" },
];

const verticals = [
  {
    icon: Home,
    label: "SFR / BTR",
    tag: "Core Strategy",
    body: "Single-Family Rentals and Build-To-Rent homes are among the most secure asset classes. We create new opportunities in Florida's growing BTR markets.",
    checks: ["Proven rental demand", "Long-term appreciation", "Portfolio diversification"],
  },
  {
    icon: DollarSign,
    label: "Capital Deployment",
    tag: "Strategic",
    body: "Capital deployment is one of the most important strategic decisions in real estate. We navigate it with precision and discipline.",
    checks: ["Risk-adjusted returns", "Structured deployment", "Active portfolio management"],
  },
  {
    icon: Search,
    label: "Acquisitions",
    tag: "Proprietary Tech",
    body: "15+ years of software development make us uniquely efficient at identifying and closing target acquisitions at scale.",
    checks: ["Automated deal sourcing", "Proprietary scoring models", "Rapid due diligence"],
  },
  {
    icon: FileText,
    label: "Tax Collector Debt",
    tag: "Specialized",
    body: "Cutting-edge solutions to help clients locate and recover tax collector debt assets in a timely, strategic manner.",
    checks: ["Specialized recovery process", "Regulatory expertise", "Proven track record"],
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

export default function MeridianDesign() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      style={{
        background: "#FFFFFF",
        color: "#0F172A",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
      className="min-h-screen"
    >
      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
        style={{ background: "rgba(255,255,255,0.90)", borderColor: "#E2E8F0" }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
          <Link href="/v2/meridian">
            <Image
              src="/images/logo.png"
              alt="Asset Quest"
              width={130}
              height={55}
              className="h-11 w-auto"
              priority
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {["Our Focus", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm font-medium transition-colors"
                  style={{ color: "#64748B" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#0F172A")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#64748B")
                  }
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-sm font-semibold px-5 py-2.5 rounded-md transition-all"
                style={{ background: "#2563EB", color: "#FFFFFF" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#1D4ED8")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#2563EB")
                }
              >
                Get in Touch
              </a>
            </li>
          </ul>

          <button
            className="md:hidden"
            style={{ color: "#0F172A" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {mobileOpen && (
          <div
            className="md:hidden border-t px-6 py-6 flex flex-col gap-5"
            style={{ background: "#FFFFFF", borderColor: "#E2E8F0" }}
          >
            {["Our Focus", "About", "Contact", "Get in Touch"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium"
                style={{ color: "#64748B" }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden pt-24"
        style={{ minHeight: "100vh", background: "#F8F9FB" }}
      >
        {/* Geometric dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.5,
          }}
        />

        {/* Blue accent orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "10%",
            right: "8%",
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle at 40% 40%, #DBEAFE 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "5%",
            left: "5%",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "radial-gradient(circle, #EFF6FF 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 w-full py-24 text-center">
          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-10"
            style={{ background: "#DBEAFE", color: "#2563EB" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#2563EB" }}
            />
            Est. 2007 · Fort Myers, Florida
          </div>

          <h1
            className="font-bold leading-[1.08] tracking-tight mb-8 mx-auto"
            style={{
              fontSize: "clamp(2.75rem, 6vw, 5rem)",
              color: "#0F172A",
              maxWidth: "18ch",
            }}
          >
            The Smarter Way to Invest in{" "}
            <span style={{ color: "#2563EB" }}>Florida Real Estate.</span>
          </h1>

          <p
            className="text-lg leading-relaxed mb-12 mx-auto"
            style={{ color: "#64748B", maxWidth: "38rem" }}
          >
            19+ years of precision acquisitions, proprietary technology, and
            disciplined capital deployment — across the Southeast United States.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <a
              href="#focus"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-bold transition-all shadow-lg"
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                boxShadow: "0 4px 24px 0 rgba(37,99,235,0.30)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1D4ED8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#2563EB";
              }}
            >
              Explore Our Focus <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-sm font-bold border-2 transition-all"
              style={{ borderColor: "#E2E8F0", color: "#0F172A" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#2563EB";
                e.currentTarget.style.color = "#2563EB";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E2E8F0";
                e.currentTarget.style.color = "#0F172A";
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden border"
            style={{ borderColor: "#E2E8F0", background: "#E2E8F0" }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="py-8 px-6"
                style={{ background: "#FFFFFF" }}
              >
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "#2563EB" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "#64748B" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left — quality tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {qualities.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group p-6 rounded-xl border text-center transition-all"
                  style={{ borderColor: "#E2E8F0", background: "#F8F9FB" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#BFDBFE";
                    e.currentTarget.style.background = "#EFF6FF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.background = "#F8F9FB";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 mx-auto"
                    style={{ background: "#DBEAFE" }}
                  >
                    <Icon size={18} style={{ color: "#2563EB" }} />
                  </div>
                  <p
                    className="text-xs font-bold uppercase tracking-wide"
                    style={{ color: "#0F172A" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Right — text */}
            <div>
              <span
                className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-6"
                style={{ color: "#2563EB" }}
              >
                About Asset Quest
              </span>
              <h2
                className="text-4xl lg:text-5xl font-bold leading-tight mb-8"
                style={{ color: "#0F172A" }}
              >
                Two decades of disciplined real estate investing.
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: "#64748B" }}
              >
                Founded in 2007 by Daniel Barres, Asset Quest is a leading real
                estate investment firm specializing in the acquisition,
                management, marketing, and sales of residential lots, commercial
                properties, and multi-family homes.
              </p>
              <p
                className="text-lg leading-relaxed mb-10"
                style={{ color: "#64748B" }}
              >
                Located in Southwest Florida, we are uniquely positioned to
                capitalize on the region&apos;s expansive growth and investment
                opportunities.
              </p>
              <a
                href="#focus"
                className="inline-flex items-center gap-2 text-sm font-bold transition-all"
                style={{ color: "#2563EB" }}
              >
                See our investment verticals <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── VERTICALS ────────────────────────────────────────────────── */}
      <section
        id="focus"
        className="py-24 lg:py-36"
        style={{ background: "#F8F9FB" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-5"
              style={{ color: "#2563EB" }}
            >
              What We Do
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-5"
              style={{ color: "#0F172A" }}
            >
              Our investment verticals.
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "#64748B" }}
            >
              Four focused disciplines. Each backed by deep expertise,
              proprietary systems, and a track record of results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verticals.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.label}
                  className="group rounded-xl p-8 border transition-all bg-white"
                  style={{ borderColor: "#E2E8F0" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#BFDBFE";
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px 0 rgba(37,99,235,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center"
                      style={{ background: "#DBEAFE" }}
                    >
                      <Icon size={20} style={{ color: "#2563EB" }} />
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "#F1F5F9",
                        color: "#64748B",
                      }}
                    >
                      {v.tag}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#0F172A" }}
                  >
                    {v.label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#64748B" }}
                  >
                    {v.body}
                  </p>

                  {/* Checklist */}
                  <ul className="flex flex-col gap-2 mb-6">
                    {v.checks.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "#DBEAFE" }}
                        >
                          <Check size={10} style={{ color: "#2563EB" }} />
                        </span>
                        <span className="text-xs font-medium" style={{ color: "#64748B" }}>
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold transition-all"
                    style={{ color: "#2563EB" }}
                  >
                    Learn more <ArrowRight size={13} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ background: "#2563EB" }}
      >
        {/* Subtle dot texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#FFFFFF" }}
          >
            Ready to invest with precision?
          </h2>
          <p
            className="text-lg mb-10 mx-auto"
            style={{ color: "rgba(255,255,255,0.75)", maxWidth: "32rem" }}
          >
            Let&apos;s identify the right strategy for your goals. Our team is
            ready to talk.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-md text-sm font-bold transition-all"
            style={{ background: "#FFFFFF", color: "#2563EB" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F1F5F9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFFFFF";
            }}
          >
            Start the Conversation <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <span
                className="inline-block text-xs font-bold tracking-[0.25em] uppercase mb-6"
                style={{ color: "#2563EB" }}
              >
                Get in Touch
              </span>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: "#0F172A" }}
              >
                Let&apos;s build your portfolio.
              </h2>
              <p
                className="text-lg leading-relaxed mb-12"
                style={{ color: "#64748B" }}
              >
                Whether you&apos;re an investor, partner, or just exploring —
                our team is here to help you move with confidence.
              </p>

              <div className="flex flex-col gap-6">
                {[
                  { icon: Phone, label: "Phone", value: "239-541-8448", href: "tel:2395418448" },
                  { icon: Mail, label: "Email", value: "info@assetquest.com", href: "mailto:info@assetquest.com" },
                  { icon: MapPin, label: "Office", value: "2180 W. First St, Suite 302\nFort Myers, FL 33901", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#DBEAFE" }}
                    >
                      <Icon size={18} style={{ color: "#2563EB" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-wider mb-1"
                        style={{ color: "#64748B" }}
                      >
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="font-bold transition-colors"
                          style={{ color: "#0F172A" }}
                          onMouseEnter={(e) =>
                            ((e.target as HTMLElement).style.color = "#2563EB")
                          }
                          onMouseLeave={(e) =>
                            ((e.target as HTMLElement).style.color = "#0F172A")
                          }
                        >
                          {value}
                        </a>
                      ) : (
                        <p
                          className="font-bold whitespace-pre-line"
                          style={{ color: "#0F172A" }}
                        >
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div
              className="rounded-xl border p-10"
              style={{ background: "#F8F9FB", borderColor: "#E2E8F0" }}
            >
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { label: "First Name", placeholder: "Daniel" },
                    { label: "Last Name", placeholder: "Barres" },
                  ].map(({ label, placeholder }) => (
                    <div key={label}>
                      <label
                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                        style={{ color: "#64748B" }}
                      >
                        {label}
                      </label>
                      <input
                        type="text"
                        placeholder={placeholder}
                        className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none border transition-colors"
                        style={{
                          background: "#FFFFFF",
                          borderColor: "#E2E8F0",
                          color: "#0F172A",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#2563EB")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "#E2E8F0")
                        }
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: "#64748B" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none border transition-colors"
                    style={{
                      background: "#FFFFFF",
                      borderColor: "#E2E8F0",
                      color: "#0F172A",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                    onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: "#64748B" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your investment goals..."
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none border transition-colors resize-none"
                    style={{
                      background: "#FFFFFF",
                      borderColor: "#E2E8F0",
                      color: "#0F172A",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                    onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
                  />
                </div>
                <button
                  className="w-full py-4 rounded-lg text-sm font-bold transition-all"
                  style={{ background: "#2563EB", color: "#FFFFFF" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#1D4ED8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#2563EB")
                  }
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer
        className="py-10 border-t"
        style={{ background: "#F8F9FB", borderColor: "#E2E8F0" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#94A3B8" }}>
            © 2025 Asset Quest, LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs transition-colors"
                style={{ color: "#94A3B8" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#2563EB")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#94A3B8")
                }
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── BACK LINK ────────────────────────────────────────────────── */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link
          href="/v2"
          className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg border shadow-md transition-all"
          style={{
            background: "#FFFFFF",
            borderColor: "#E2E8F0",
            color: "#64748B",
          }}
        >
          ← Back to designs
        </Link>
      </div>
    </div>
  );
}
