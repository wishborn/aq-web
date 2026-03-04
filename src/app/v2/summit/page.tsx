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
  Shield,
  Leaf,
} from "lucide-react";

// ── Palette ────────────────────────────────────────────────────────────────
// Background:   #FAF8F4  (warm ivory)
// Primary:      #1B3A2D  (deep forest green)
// Accent:       #C9933A  (warm amber / gold)
// Surface:      #EEF2E9  (light sage)
// Muted text:   #5C6B5E
// Border:       #DDE5D8
// ──────────────────────────────────────────────────────────────────────────

const stats = [
  { value: "19+", label: "Years Operating" },
  { value: "$2B+", label: "Assets Managed" },
  { value: "500+", label: "Transactions" },
  { value: "SW FL", label: "Regional Focus" },
];

const verticals = [
  {
    icon: Home,
    label: "SFR / BTR",
    tag: "Core Strategy",
    body: "Single-Family Rentals and Build-To-Rent homes are among the most secure asset classes. We create new opportunities for investors in Florida's growing BTR markets.",
  },
  {
    icon: DollarSign,
    label: "Capital Deployment",
    tag: "Strategic",
    body: "Capital deployment decisions are among the most important strategic choices. We help you navigate with confidence and precision.",
  },
  {
    icon: Search,
    label: "Acquisitions",
    tag: "Proprietary Tech",
    body: "Proprietary software built over 15+ years makes us uniquely efficient and automated in how we identify and close target acquisitions.",
  },
  {
    icon: FileText,
    label: "Debt Service",
    tag: "Specialized",
    body: "Cutting-edge solutions to help clients locate and recover tax collector debt assets in a timely, strategic manner.",
  },
];

const pillars = [
  { icon: Shield, label: "Integrity" },
  { icon: BarChart3, label: "Transparency" },
  { icon: Gem, label: "Excellence" },
  { icon: TrendingUp, label: "Results" },
  { icon: Users, label: "Client-First" },
  { icon: Leaf, label: "Sustainable Growth" },
];

export default function SummitDesign() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      style={{
        background: "#FAF8F4",
        color: "#1B3A2D",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
      className="min-h-screen"
    >
      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
        style={{ background: "rgba(250,248,244,0.90)", borderColor: "#DDE5D8" }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
          <Link href="/v2/summit">
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
                  style={{ color: "#5C6B5E" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#1B3A2D")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#5C6B5E")
                  }
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-sm font-semibold px-6 py-2.5 rounded transition-colors"
                style={{
                  background: "#1B3A2D",
                  color: "#FAF8F4",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.background = "#C9933A")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.background = "#1B3A2D")
                }
              >
                Get in Touch
              </a>
            </li>
          </ul>

          <button
            className="md:hidden"
            style={{ color: "#1B3A2D" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {mobileOpen && (
          <div
            className="md:hidden border-t px-6 py-6 flex flex-col gap-5"
            style={{ background: "#FAF8F4", borderColor: "#DDE5D8" }}
          >
            {["Our Focus", "About", "Contact", "Get in Touch"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium"
                style={{ color: "#5C6B5E" }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-0 overflow-hidden"
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        {/* Warm earthy gradient strip at top */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{ background: "linear-gradient(90deg, #1B3A2D, #C9933A, #1B3A2D)" }}
        />

        {/* Subtle background texture rings */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #EEF2E9 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #EEF2E9 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left — 7 columns */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-3 mb-10"
                style={{ color: "#C9933A" }}
              >
                <span
                  className="block h-px w-10"
                  style={{ background: "#C9933A" }}
                />
                <span className="text-xs font-bold tracking-[0.3em] uppercase">
                  Est. 2007 · Fort Myers, FL
                </span>
              </div>

              <h1
                className="font-bold leading-[1.08] tracking-tight mb-8"
                style={{ fontSize: "clamp(2.75rem, 5vw, 4.5rem)", color: "#1B3A2D" }}
              >
                Building Wealth
                <br />
                <span style={{ color: "#C9933A" }}>Grounded in Florida.</span>
              </h1>

              <p
                className="text-lg leading-relaxed mb-12"
                style={{ color: "#5C6B5E", maxWidth: "32rem" }}
              >
                Asset Quest has spent 19+ years acquiring, managing, and growing
                real estate portfolios across the Southeast United States —
                combining deep local knowledge with proprietary technology.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#focus"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold transition-all"
                  style={{ background: "#1B3A2D", color: "#FAF8F4" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#C9933A";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "#1B3A2D";
                  }}
                >
                  Explore Our Focus <ArrowRight size={15} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold border-2 transition-all"
                  style={{ borderColor: "#1B3A2D", color: "#1B3A2D", background: "transparent" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "#C9933A";
                    el.style.color = "#C9933A";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "#1B3A2D";
                    el.style.color = "#1B3A2D";
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right — 5 columns: stat stack */}
            <div className="hidden lg:flex lg:col-span-5 flex-col gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between px-8 py-6 border-l-4"
                  style={{
                    borderColor: i % 2 === 0 ? "#1B3A2D" : "#C9933A",
                    background: "#FFFFFF",
                    boxShadow: "0 2px 12px 0 rgba(27,58,45,0.06)",
                  }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "#5C6B5E" }}
                  >
                    {s.label}
                  </span>
                  <span
                    className="text-3xl font-bold"
                    style={{ color: i % 2 === 0 ? "#1B3A2D" : "#C9933A" }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="w-full overflow-hidden leading-none" style={{ height: 80 }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </section>

      {/* ── PILLARS ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left text */}
            <div>
              <span
                className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-6"
                style={{ color: "#C9933A" }}
              >
                Who We Are
              </span>
              <h2
                className="text-4xl lg:text-5xl font-bold leading-tight mb-8"
                style={{ color: "#1B3A2D" }}
              >
                Florida&apos;s most experienced real estate partner.
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#5C6B5E" }}>
                Founded in 2007 by Daniel Barres, Asset Quest is a leading real
                estate investment firm specializing in the acquisition,
                management, marketing, and sales of residential lots, commercial
                properties, and multi-family homes.
              </p>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "#5C6B5E" }}>
                Located in Southwest Florida, we are uniquely positioned to
                capitalize on the region&apos;s expansive growth and investment
                opportunities.
              </p>
              <a
                href="#focus"
                className="inline-flex items-center gap-2 text-sm font-bold transition-all"
                style={{ color: "#1B3A2D" }}
              >
                See what we invest in <ArrowRight size={15} />
              </a>
            </div>

            {/* Right — pillar grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {pillars.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center p-6 border transition-all"
                  style={{ borderColor: "#DDE5D8", background: "#FAF8F4" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "#C9933A";
                    el.style.background = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "#DDE5D8";
                    el.style.background = "#FAF8F4";
                  }}
                >
                  <div
                    className="w-11 h-11 flex items-center justify-center mb-4"
                    style={{ background: "#EEF2E9" }}
                  >
                    <Icon size={20} style={{ color: "#1B3A2D" }} />
                  </div>
                  <p
                    className="text-xs font-bold uppercase tracking-wide"
                    style={{ color: "#1B3A2D" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VERTICALS ────────────────────────────────────────────────── */}
      <section
        id="focus"
        className="py-24 lg:py-36"
        style={{ background: "#FAF8F4" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-start mb-16">
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase mb-5"
              style={{ color: "#C9933A" }}
            >
              Our Focus
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold mb-5"
              style={{ color: "#1B3A2D" }}
            >
              Four pillars. One mission.
            </h2>
            <p className="text-lg" style={{ color: "#5C6B5E", maxWidth: "36rem" }}>
              We invest in defensible real estate strategies that generate
              reliable, long-term returns for our partners and clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ background: "#DDE5D8" }}>
            {verticals.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.label}
                  className="group p-10 transition-all"
                  style={{ background: "#FFFFFF" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#FAF8F4")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#FFFFFF")
                  }
                >
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-12 h-12 flex items-center justify-center"
                      style={{ background: "#EEF2E9" }}
                    >
                      <Icon size={22} style={{ color: "#1B3A2D" }} />
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1 border"
                      style={{
                        borderColor: "#DDE5D8",
                        color: "#5C6B5E",
                        background: "#FAF8F4",
                      }}
                    >
                      {v.tag}
                    </span>
                  </div>
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2"
                    style={{ color: "#C9933A" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: "#1B3A2D" }}
                  >
                    {v.label}
                  </h3>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: "#5C6B5E" }}>
                    {v.body}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold transition-all"
                    style={{ color: "#C9933A" }}
                  >
                    Learn more <ArrowRight size={13} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section
        className="py-28"
        style={{ background: "#1B3A2D" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* Gold rule */}
          <div
            className="mx-auto mb-10 h-px w-24"
            style={{ background: "#C9933A" }}
          />
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#FAF8F4" }}
          >
            Ready to grow your portfolio?
          </h2>
          <p
            className="text-lg mb-12 mx-auto"
            style={{ color: "rgba(250,248,244,0.65)", maxWidth: "32rem" }}
          >
            Whether you&apos;re an investor, partner, or exploring opportunities
            in Southeast US real estate — let&apos;s talk.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-5 text-sm font-bold transition-all"
            style={{ background: "#C9933A", color: "#FFFFFF" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#FAF8F4") ||
              (e.currentTarget.style.color = "#1B3A2D")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#C9933A") ||
              (e.currentTarget.style.color = "#FFFFFF")
            }
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
                className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-6"
                style={{ color: "#C9933A" }}
              >
                Contact
              </span>
              <h2
                className="text-4xl lg:text-5xl font-bold mb-8"
                style={{ color: "#1B3A2D" }}
              >
                Let&apos;s build something lasting.
              </h2>
              <p className="text-lg leading-relaxed mb-12" style={{ color: "#5C6B5E" }}>
                Our team is ready to help you identify the right investment
                strategy for your goals.
              </p>

              <div className="flex flex-col gap-7">
                {[
                  { icon: Phone, label: "Phone", value: "239-541-8448", href: "tel:2395418448" },
                  { icon: Mail, label: "Email", value: "info@assetquest.com", href: "mailto:info@assetquest.com" },
                  { icon: MapPin, label: "Office", value: "2180 W. First St, Suite 302\nFort Myers, FL 33901", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-5">
                    <div
                      className="w-11 h-11 flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "#EEF2E9" }}
                    >
                      <Icon size={18} style={{ color: "#1B3A2D" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-wider mb-1"
                        style={{ color: "#5C6B5E" }}
                      >
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="font-bold transition-colors"
                          style={{ color: "#1B3A2D" }}
                          onMouseEnter={(e) =>
                            ((e.target as HTMLElement).style.color = "#C9933A")
                          }
                          onMouseLeave={(e) =>
                            ((e.target as HTMLElement).style.color = "#1B3A2D")
                          }
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-bold whitespace-pre-line" style={{ color: "#1B3A2D" }}>
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
              className="p-10 border"
              style={{ background: "#FAF8F4", borderColor: "#DDE5D8" }}
            >
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  {["First Name", "Last Name"].map((label, i) => (
                    <div key={label}>
                      <label
                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                        style={{ color: "#5C6B5E" }}
                      >
                        {label}
                      </label>
                      <input
                        type="text"
                        placeholder={i === 0 ? "Daniel" : "Barres"}
                        className="w-full px-4 py-3 text-sm focus:outline-none border transition-colors"
                        style={{
                          background: "#FFFFFF",
                          borderColor: "#DDE5D8",
                          color: "#1B3A2D",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "#1B3A2D")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "#DDE5D8")
                        }
                      />
                    </div>
                  ))}
                </div>
                {[
                  { label: "Email", type: "email", placeholder: "your@email.com" },
                ].map(({ label, type, placeholder }) => (
                  <div key={label}>
                    <label
                      className="block text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "#5C6B5E" }}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 text-sm focus:outline-none border transition-colors"
                      style={{
                        background: "#FFFFFF",
                        borderColor: "#DDE5D8",
                        color: "#1B3A2D",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#1B3A2D")}
                      onBlur={(e) => (e.target.style.borderColor = "#DDE5D8")}
                    />
                  </div>
                ))}
                <div>
                  <label
                    className="block text-xs font-bold uppercase tracking-wider mb-2"
                    style={{ color: "#5C6B5E" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your investment goals..."
                    className="w-full px-4 py-3 text-sm focus:outline-none border transition-colors resize-none"
                    style={{
                      background: "#FFFFFF",
                      borderColor: "#DDE5D8",
                      color: "#1B3A2D",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#1B3A2D")}
                    onBlur={(e) => (e.target.style.borderColor = "#DDE5D8")}
                  />
                </div>
                <button
                  className="w-full py-4 text-sm font-bold transition-colors"
                  style={{ background: "#1B3A2D", color: "#FAF8F4" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#C9933A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#1B3A2D")
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
        style={{ background: "#FAF8F4", borderColor: "#DDE5D8" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#5C6B5E" }}>
            © 2025 Asset Quest, LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs transition-colors"
                style={{ color: "#5C6B5E" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#1B3A2D")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#5C6B5E")
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
          className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 border shadow-md transition-all"
          style={{
            background: "#FAF8F4",
            borderColor: "#DDE5D8",
            color: "#5C6B5E",
          }}
        >
          ← Back to designs
        </Link>
      </div>
    </div>
  );
}
