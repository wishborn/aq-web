import Link from "next/link";

const designs = [
  {
    href: "/v2/coastal",
    name: "Coastal",
    tagline: "Clean modern coastal",
    description:
      "Crisp white canvas, deep ocean blue, glassmorphism stat cards, and generous breathing room. Feels trustworthy, forward-looking, and polished.",
    palette: ["#F8FAFF", "#0A2540", "#1D77D1", "#E8F0FE"],
    paletteLabels: ["Snow", "Abyss", "Ocean", "Mist"],
    accentHex: "#1D77D1",
    heroBg: "#F0F5FF",
    heroAccent: "#0A2540",
  },
  {
    href: "/v2/summit",
    name: "Summit",
    tagline: "Warm earthy authority",
    description:
      "Warm ivory backgrounds, deep forest green, and amber gold accents. Conveys longevity, trust, and grounded expertise — classic with a modern edge.",
    palette: ["#FAF8F4", "#1B3A2D", "#C9933A", "#EEF2E9"],
    paletteLabels: ["Ivory", "Forest", "Amber", "Sage"],
    accentHex: "#C9933A",
    heroBg: "#EEF2E9",
    heroAccent: "#1B3A2D",
  },
  {
    href: "/v2/meridian",
    name: "Meridian",
    tagline: "Precision-clean modern",
    description:
      "Near-white slate, dark navy type, and electric blue as the single accent. SaaS-level clarity meets institutional real estate — minimal, sharp, confident.",
    palette: ["#F8F9FB", "#0F172A", "#2563EB", "#DBEAFE"],
    paletteLabels: ["Slate-50", "Ink", "Electric", "Blue-100"],
    accentHex: "#2563EB",
    heroBg: "#EFF6FF",
    heroAccent: "#2563EB",
  },
];

export default function V2IndexPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "#F8F9FB",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      {/* Top bar */}
      <div
        className="w-full border-b px-6 py-4 flex items-center justify-between"
        style={{ background: "#FFFFFF", borderColor: "#E2E8F0" }}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: "#64748B" }}
          >
            Asset Quest
          </span>
          <span style={{ color: "#CBD5E1" }}>/</span>
          <span
            className="text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: "#2563EB" }}
          >
            Design Lab
          </span>
        </div>
        <span
          className="text-xs px-2.5 py-1 rounded-full font-semibold"
          style={{ background: "#DBEAFE", color: "#2563EB" }}
        >
          3 concepts
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1
            className="text-4xl sm:text-5xl font-bold leading-tight mb-5"
            style={{ color: "#0F172A" }}
          >
            Choose a direction.
          </h1>
          <p className="text-lg" style={{ color: "#64748B", maxWidth: "38rem" }}>
            Three distinct visual directions for the new Asset Quest website.
            Click any card to explore the full homepage concept.
          </p>
        </div>

        {/* Cards — stack vertically for a magazine-style feel */}
        <div className="flex flex-col gap-6">
          {designs.map((d, idx) => (
            <Link
              key={d.href}
              href={d.href}
              className="group flex flex-col sm:flex-row overflow-hidden border rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: "#FFFFFF", borderColor: "#E2E8F0" }}
            >
              {/* Mini preview pane */}
              <div
                className="sm:w-72 sm:flex-shrink-0 flex flex-col items-center justify-center px-8 py-10 relative overflow-hidden"
                style={{ background: d.heroBg, minHeight: 200 }}
              >
                {/* Fake browser dots */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400/60" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
                  <span className="w-2 h-2 rounded-full bg-green-400/60" />
                </div>

                {/* Miniature layout sketch */}
                <div className="w-full max-w-[180px] flex flex-col gap-2.5">
                  {/* Nav stub */}
                  <div className="flex justify-between items-center mb-1">
                    <div
                      className="h-2 w-16 rounded"
                      style={{ background: d.heroAccent, opacity: 0.3 }}
                    />
                    <div
                      className="h-2 w-10 rounded"
                      style={{ background: d.heroAccent, opacity: 0.15 }}
                    />
                  </div>
                  {/* Hero headline */}
                  <div
                    className="h-4 w-full rounded"
                    style={{ background: d.heroAccent, opacity: 0.2 }}
                  />
                  <div
                    className="h-3 w-3/4 rounded"
                    style={{ background: d.accentHex, opacity: 0.5 }}
                  />
                  {/* Subtext */}
                  <div
                    className="h-2 w-full rounded"
                    style={{ background: d.heroAccent, opacity: 0.1 }}
                  />
                  <div
                    className="h-2 w-5/6 rounded"
                    style={{ background: d.heroAccent, opacity: 0.1 }}
                  />
                  {/* Buttons */}
                  <div className="flex gap-2 mt-1">
                    <div
                      className="h-5 w-20 rounded"
                      style={{ background: d.heroAccent, opacity: 0.7 }}
                    />
                    <div
                      className="h-5 w-16 rounded border"
                      style={{ borderColor: d.heroAccent, opacity: 0.3 }}
                    />
                  </div>
                  {/* Card row */}
                  <div className="grid grid-cols-3 gap-1.5 mt-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="h-10 rounded-lg"
                        style={{
                          background: d.heroAccent,
                          opacity: 0.07 + i * 0.03,
                          border: `1px solid ${d.heroAccent}22`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Index badge */}
                <div
                  className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ background: d.accentHex, color: "#FFFFFF" }}
                >
                  {idx + 1}
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `${d.accentHex}18` }}
                >
                  <span
                    className="text-xs font-bold px-4 py-2 rounded-full"
                    style={{ background: "#FFFFFF", color: d.accentHex }}
                  >
                    Preview →
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h2
                        className="text-2xl font-bold mb-1"
                        style={{ color: "#0F172A" }}
                      >
                        {d.name}
                      </h2>
                      <p
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: d.accentHex }}
                      >
                        {d.tagline}
                      </p>
                    </div>
                    <span
                      className="text-2xl transition-transform group-hover:translate-x-1"
                      style={{ color: "#CBD5E1" }}
                    >
                      →
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed mt-4 mb-6"
                    style={{ color: "#64748B", maxWidth: "42ch" }}
                  >
                    {d.description}
                  </p>
                </div>

                {/* Palette swatches */}
                <div className="flex items-center gap-4">
                  {d.palette.map((hex, i) => (
                    <div key={hex} className="flex flex-col items-center gap-1.5">
                      <div
                        className="w-7 h-7 rounded-full border-2"
                        style={{
                          backgroundColor: hex,
                          borderColor: "#E2E8F0",
                        }}
                        title={d.paletteLabels[i]}
                      />
                      <span
                        className="text-[10px] font-medium"
                        style={{ color: "#94A3B8" }}
                      >
                        {d.paletteLabels[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="mt-16 text-xs text-center"
          style={{ color: "#CBD5E1" }}
        >
          Design explorations for Asset Quest — not production pages.
        </p>
      </div>
    </div>
  );
}
