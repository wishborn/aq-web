import Link from "next/link";

const designs = [
  {
    href: "/v2/obsidian",
    name: "Obsidian",
    tagline: "Dark luxury editorial",
    description:
      "Deep charcoal backgrounds, gold accents, bold serif headings, and sharp editorial grid layouts. Commands authority and premium positioning.",
    palette: ["#0D0D0D", "#1A1A1A", "#C9A84C", "#FFFFFF"],
    paletteLabels: ["Obsidian", "Carbon", "Gold", "White"],
    preview: "dark",
  },
  {
    href: "/v2/coastal",
    name: "Coastal",
    tagline: "Clean modern coastal",
    description:
      "Crisp white canvas, deep ocean blue, glassmorphism cards, and generous breathing room. Feels trustworthy, fresh, and forward-looking.",
    palette: ["#F8FAFF", "#0A2540", "#1D77D1", "#E8F0FE"],
    paletteLabels: ["Snow", "Abyss", "Ocean", "Mist"],
    preview: "light",
  },
];

export default function V2IndexPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-4">
          Asset Quest · Design Lab
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Choose a Direction
        </h1>
        <p className="text-[#888] text-lg max-w-xl mx-auto">
          Two distinct design concepts for the new Asset Quest website.
          Click any card to explore the full homepage.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {designs.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Mock preview window */}
            <div
              className={`h-64 relative flex items-center justify-center overflow-hidden ${
                d.preview === "dark" ? "bg-[#0D0D0D]" : "bg-[#F0F4FF]"
              }`}
            >
              {/* Fake browser chrome */}
              <div className="absolute top-4 left-4 flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>

              {d.preview === "dark" ? (
                /* Obsidian mini preview */
                <div className="w-full px-8 pt-10 pb-6 flex flex-col items-center gap-3">
                  <div className="h-1.5 w-12 rounded-full bg-[#C9A84C]" />
                  <div className="h-7 w-48 rounded bg-white/10" />
                  <div className="h-3 w-36 rounded bg-white/5" />
                  <div className="mt-2 flex gap-3">
                    <div className="h-8 w-24 rounded border border-[#C9A84C]/60 bg-[#C9A84C]/10" />
                    <div className="h-8 w-24 rounded border border-white/20" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 w-full opacity-60">
                    <div className="h-14 rounded bg-white/5 border border-white/10" />
                    <div className="h-14 rounded bg-white/5 border border-white/10" />
                    <div className="h-14 rounded bg-white/5 border border-white/10" />
                  </div>
                </div>
              ) : (
                /* Coastal mini preview */
                <div className="w-full px-8 pt-10 pb-6 flex flex-col items-center gap-3">
                  <div className="h-1.5 w-12 rounded-full bg-[#1D77D1]" />
                  <div className="h-7 w-48 rounded bg-[#0A2540]/20" />
                  <div className="h-3 w-36 rounded bg-[#0A2540]/10" />
                  <div className="mt-2 flex gap-3">
                    <div className="h-8 w-28 rounded-full bg-[#0A2540]" />
                    <div className="h-8 w-24 rounded-full border border-[#0A2540]/40" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 w-full opacity-70">
                    <div className="h-14 rounded-xl bg-white shadow-sm border border-[#E8F0FE]" />
                    <div className="h-14 rounded-xl bg-white shadow-sm border border-[#E8F0FE]" />
                    <div className="h-14 rounded-xl bg-white shadow-sm border border-[#E8F0FE]" />
                  </div>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  Preview →
                </span>
              </div>
            </div>

            {/* Card body */}
            <div
              className={`p-6 ${
                d.preview === "dark" ? "bg-[#141414]" : "bg-[#1a1a1a]"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-xl font-bold text-white">{d.name}</h2>
                  <p className="text-xs text-[#C9A84C] font-semibold tracking-widest uppercase mt-0.5">
                    {d.tagline}
                  </p>
                </div>
                <span className="text-white/30 group-hover:text-white/70 transition-colors text-2xl">
                  →
                </span>
              </div>

              <p className="text-[#888] text-sm leading-relaxed mb-5">
                {d.description}
              </p>

              {/* Palette swatches */}
              <div className="flex items-center gap-3">
                {d.palette.map((hex, i) => (
                  <div key={hex} className="flex flex-col items-center gap-1">
                    <div
                      className="w-6 h-6 rounded-full border border-white/10"
                      style={{ backgroundColor: hex }}
                      title={d.paletteLabels[i]}
                    />
                    <span className="text-[10px] text-[#555]">
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
      <p className="mt-16 text-[#444] text-xs text-center">
        These are design explorations only — not live production pages.
      </p>
    </div>
  );
}
