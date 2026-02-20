import {
  BarChart3,
  Mail,
  ClipboardCheck,
  Gem,
  TrendingUp,
  Users,
} from "lucide-react";

const experiences = [
  { icon: BarChart3, label: "Transparency" },
  { icon: Mail, label: "Market Guidance" },
  { icon: ClipboardCheck, label: "Efficiency" },
  { icon: Gem, label: "Flexibility" },
  { icon: TrendingUp, label: "Results Driven" },
  { icon: Users, label: "Client Oriented" },
];

export default function ExperienceGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
      {experiences.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center gap-4 group">
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <span className="text-white text-xs font-semibold uppercase tracking-wider text-center">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
