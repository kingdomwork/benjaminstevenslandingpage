import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Gavel, Key, Users } from "lucide-react";

const brands = [
  {
    id: "recruitment",
    title: "x eXp Recruitment",
    icon: Users,
    description: "For estate agents ready to go independent.",
    link: "/recruitment",
    color: "text-teal-400",
    hoverBorder: "hover:border-teal-500/50",
    bgGradient: "from-teal-500/10",
  },
  {
    id: "lettings",
    title: "Lettings",
    icon: Key,
    description: "For private landlords nervous about new laws.",
    link: "/lettings",
    color: "text-amber-400",
    hoverBorder: "hover:border-amber-500/50",
    bgGradient: "from-amber-500/10",
  },
  {
    id: "block-management",
    title: "Block Management",
    icon: Building2,
    description: "For RMC directors, freeholders, and developers.",
    link: "/block-management",
    color: "text-indigo-400",
    hoverBorder: "hover:border-indigo-500/50",
    bgGradient: "from-indigo-500/10",
  },
  {
    id: "auctions",
    title: "Auctions & Investments",
    icon: Gavel,
    description: "For investors, probate sellers, and property flippers.",
    link: "/auctions",
    color: "text-red-400",
    hoverBorder: "hover:border-red-500/50",
    bgGradient: "from-red-500/10",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-6">
          Benjamin Stevens <span className="text-amber-500">.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto">
          Choose your path. Expert guidance for every stage of your property journey.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link 
              to={brand.link}
              className={`group relative block h-full p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${brand.hoverBorder}`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${brand.bgGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`mb-6 inline-flex p-3 rounded-xl bg-slate-950 border border-slate-800 ${brand.color}`}>
                  <brand.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-serif font-medium mb-3 group-hover:text-white transition-colors">
                  {brand.title}
                </h3>
                
                <p className="text-slate-400 mb-8 flex-grow group-hover:text-slate-300 transition-colors">
                  {brand.description}
                </p>
                
                <div className={`flex items-center gap-2 text-sm font-medium ${brand.color}`}>
                  Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <footer className="mt-24 text-slate-600 text-sm">
        © 2026 Benjamin Stevens Estate Agency. All rights reserved.
      </footer>
    </div>
  );
}
