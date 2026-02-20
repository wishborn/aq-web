import Link from "next/link";
import HeroDiamonds from "@/components/HeroDiamonds";
import ExperienceGrid from "@/components/ExperienceGrid";

const FOUNDING_YEAR = 2007;

export default function HomePage() {
  const yearsInBusiness = new Date().getFullYear() - FOUNDING_YEAR;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] bg-navy overflow-hidden">
        {/* World map background */}
        <div
          className="absolute inset-0 opacity-20 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/world-map.svg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-accent/80 to-navy/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Heading */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              {yearsInBusiness}+ years of Asset Management, Capital Management, and Acquisition
              services for Investment Capital.
            </h1>
            <Link
              href="/our-focus"
              className="inline-block bg-white/10 border-2 border-white text-white px-8 py-3 font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-navy transition-all"
            >
              Learn More
            </Link>
          </div>

          {/* Right - Diamond cards */}
          <div className="flex-1 flex justify-center">
            <HeroDiamonds />
          </div>
        </div>
      </section>

      {/* Who We Are / What We Offer */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Who We Are */}
            <div>
              <h3 className="text-2xl font-bold text-accent uppercase tracking-wide mb-6">
                Who We Are
              </h3>
              <p className="text-body leading-relaxed">
                Founded in 2007, by Daniel Barres, Asset Quest continues to be a
                leading real estate investment firm, specializing in the
                acquisition, management, marketing and sales of improved
                residential lots, commercial properties, and multi-family homes.
                Located in the Southwest Florida region, Asset Quest is poised to
                capitalize on the expansive growth and investment opportunities
                that Florida offers.
              </p>
            </div>

            {/* What We Offer */}
            <div>
              <h3 className="text-2xl font-bold text-accent uppercase tracking-wide mb-6">
                What We Offer
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-accent mt-1">&#9670;</span>
                  <span className="text-body leading-relaxed">
                    Extensive focus on aggregating assets and debt servicing for
                    clients with the ability to initiate target acquisitions that
                    meet our client&apos;s demands.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">&#9670;</span>
                  <span className="text-body leading-relaxed">
                    A full range of investment and portfolio management services
                    for our clients.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1">&#9670;</span>
                  <span className="text-body leading-relaxed">
                    Market analysis using our proprietary forward which tracks
                    market changes and provides a customized campaign based on
                    our client&apos;s investment requirements.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Asset Quest Experience */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide mb-16">
            The Asset Quest Experience
          </h2>
          <ExperienceGrid />
        </div>
      </section>
    </>
  );
}
