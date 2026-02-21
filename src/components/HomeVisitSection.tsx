import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function HomeVisitSection() {
  return (
    <section className="relative w-full text-white py-20 px-6 md:px-16 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-wide text-blue-400 mb-6">
            HOME VISITS
          </h2>

          <p className="text-slate-600 leading-relaxed text-lg">
            We have been offering Home visits for the past 25 years and it has
            become an integral part of our rehabilitation service. We have
            reserved this service for the elderly, frail and those with a
            neurological disorder.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <h3 className="text-3xl font-semibold text-blue-300 mb-8">
            THE BENEFITS OF A HOME VISIT:
          </h3>

          <ul className="space-y-6">
            {[
              "Familiarity of surroundings reduces anxiety.",
              "The stress of travelling for the frail and elderly is removed.",
              "We can gain a greater understanding of the problems you face every day such as difficulties when climbing your stairs, when getting in/out of your bed or walking in the community.",
              "These problems can be addressed more effectively.",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 text-slate-400"
              >
                <CheckCircle2 className="text-blue-400 mt-1 shrink-0" size={20} />
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Decorative Card Behind */}
          <div className="absolute right-0 top-12 w-64 h-80 bg-blue-900/20 border border-blue-700 rounded-3xl blur-xl -z-10" />
        </div>
      </div>
    </section>
  );
}
