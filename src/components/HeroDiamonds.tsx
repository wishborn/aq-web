const diamonds = [
  {
    text: "Proprietary Asset Management Software",
    position: "top",
  },
  {
    text: "Specialization in real estate acquisition, management, and sales",
    position: "left",
  },
  {
    text: "Recognized highest volume of transactions by Business Insider",
    position: "bottom",
  },
  {
    text: "Operator and developer servicing the Southeast United States",
    position: "right",
  },
];

export default function HeroDiamonds() {
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px]">
      {/* Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <Diamond text={diamonds[0].text} />
      </div>
      {/* Left */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2">
        <Diamond text={diamonds[1].text} />
      </div>
      {/* Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <Diamond text={diamonds[2].text} />
      </div>
      {/* Right */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2">
        <Diamond text={diamonds[3].text} />
      </div>
    </div>
  );
}

function Diamond({ text }: { text: string }) {
  return (
    <div className="diamond w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] lg:w-[170px] lg:h-[170px] border-2 border-white/70 bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-default hover:bg-white/20 transition-colors">
      <p className="diamond-content text-white text-xs sm:text-sm font-semibold text-center px-2 leading-tight">
        {text}
      </p>
    </div>
  );
}
