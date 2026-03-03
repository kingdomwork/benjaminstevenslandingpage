import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { LeadForm } from "@/components/LeadForm";
import { ArrowLeft, CheckCircle2, ShieldAlert } from "lucide-react";

interface SubBrandPageProps {
  title: string;
  subtitle: string;
  myth: string;
  truth: string;
  cta: string;
  benefits: string[];
  accentColor: string;
  bulletColor: string;
  campaignId: string;
}

export function SubBrandPage({
  title,
  subtitle,
  myth,
  truth,
  cta,
  benefits,
  accentColor,
  bulletColor,
  campaignId,
}: SubBrandPageProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500/30">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-6 z-10 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <div className="font-serif text-xl font-bold tracking-tight">
          Benjamin Stevens <span className="text-amber-500">.</span>
        </div>
      </header>

      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Panel: Content */}
        <div className="relative flex flex-col justify-center px-8 py-24 lg:px-16 xl:px-24 border-r border-slate-800/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-6 bg-opacity-10 ${accentColor} bg-current`}>
              {title}
            </span>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-medium leading-tight mb-6">
              {subtitle}
            </h1>

            {/* Myth vs Truth Section */}
            <div className="my-12 space-y-6">
              <div className="bg-red-950/20 border-l-4 border-red-500/50 p-6 rounded-r-lg backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <ShieldAlert className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-red-200 font-bold text-sm uppercase tracking-wide mb-1">The Myth</h3>
                    <p className="text-lg text-red-100/90 font-serif italic">"{myth}"</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-950/20 border-l-4 border-emerald-500/50 p-6 rounded-r-lg backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-emerald-200 font-bold text-sm uppercase tracking-wide mb-1">The Truth</h3>
                    <p className="text-lg text-emerald-100/90">{truth}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <ul className="space-y-3 mb-12">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-300">
                  <div className={`w-1.5 h-1.5 rounded-full ${bulletColor}`} />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right Panel: Form */}
        <div className="relative bg-slate-900 flex flex-col justify-center px-8 py-24 lg:px-16">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto w-full relative z-10"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif mb-2">Take the Next Step</h2>
              <p className="text-slate-400 text-sm">
                Complete the form below to {cta.toLowerCase()}.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl shadow-black/50">
              <LeadForm campaign={campaignId} ctaText={cta} />
            </div>
            
            <div className="mt-8 flex justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Trust Badges / Logos could go here */}
               <div className="h-8 w-24 bg-slate-800 rounded animate-pulse" />
               <div className="h-8 w-24 bg-slate-800 rounded animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
