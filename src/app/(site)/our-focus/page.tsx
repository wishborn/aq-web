"use client";

import { useState } from "react";
import { Home, DollarSign, Search, FileText } from "lucide-react";

const verticals = [
  {
    icon: Home,
    label: "SFR/BTR",
    description:
      "Single-Family-Rentals and Build-To-Rent homes are among the most secure asset classes when considering the volatility of the market. Asset Quest specializes in creating new opportunities for investors in the growing Build-To-Rent markets.",
  },
  {
    icon: DollarSign,
    label: "Capital Deployment",
    description:
      "At Asset Quest, we understand that capital deployment decisions are among the most important strategic choices to be made. We are ready to assist you in making the best decision for you.",
  },
  {
    icon: Search,
    label: "Acquisitions Management",
    description:
      "Asset Quest focuses on assembling assets for our clients. However, we can initiate our target acquisition to anywhere that meets your demand. Over the past 15 years we have built custom designed software that makes us efficient and automated in our approach.",
  },
  {
    icon: FileText,
    label: "Tax Collector Debt Service",
    description:
      "We provide cutting edge solutions to help you locate and recover your assets in a timely manner.",
  },
];

export default function OurFocusPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Header spacer for absolute nav */}
      <div className="h-24 bg-navy" />

      {/* What We Look For */}
      <section className="py-16 lg:py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent uppercase tracking-wide mb-6">
            What We Look For
          </h2>
          <p className="text-lg text-body leading-relaxed">
            Defensible businesses in growing markets with tangible performance
            improvement opportunities.
          </p>
        </div>
      </section>

      {/* Our Verticals */}
      <section className="relative bg-gray-light py-16 lg:py-24">
        {/* Downward arrow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[30px] border-t-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy-light mb-12">
            Our Verticals
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {verticals.map((v, i) => {
              const Icon = v.icon;
              return (
                <button
                  key={v.label}
                  onClick={() => setActiveIndex(i)}
                  className={`flex flex-col items-center gap-4 group cursor-pointer transition-all ${
                    activeIndex === i ? "scale-105" : ""
                  }`}
                >
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center transition-colors ${
                      activeIndex === i
                        ? "bg-accent text-white"
                        : "bg-white text-navy-light border-2 border-gray-medium"
                    }`}
                  >
                    <Icon className="w-10 h-10" />
                  </div>
                  <span
                    className={`text-sm font-bold uppercase tracking-wide ${
                      activeIndex === i ? "text-accent" : "text-navy-light"
                    }`}
                  >
                    {v.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detail section */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white text-lg lg:text-xl leading-relaxed italic">
            {verticals[activeIndex].description}
          </p>
        </div>
      </section>
    </>
  );
}
