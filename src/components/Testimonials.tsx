import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const VISIBLE_COUNT = 3;
const AUTO_ADVANCE_MS = 6000; // 6 seconds

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Ann Marie Reinhold, Ph.D.",
      role: "Co-Director Software Engineering & Cyber Security Lab (SECL)",
      company: "Montana State University",
      quote:
        "Yvette does an excellent job asking our customers the right questions to identify pain points. She has the skills and drive to implement solutions that meet their needs and exceed their expectations.",
    },
    {
      id: 2,
      name: "Dr. Clemente Izurieta, Ph.D.",
      role: "Co-Director Software Engineering & Cyber Security Lab (SECL)",
      company: "Montana State University",
      quote:
        "Yvette demonstrates the maturity, leadership, and initiative expected of a Ph.D. student. Her broad technical skill set allows her to work effectively across diverse analytical problems.",
    },
    {
      id: 3,
      name: "Ryan Cummings",
      role: "Research Engineer",
      company: "Montana State University",
      quote:
        "Yvette's work broadly in the SECL and specifically on visualizing PIQUE output has made it easy to navigate and understand complex data. Her attention to quality in use brings a desperately needed perspective to software engineering.",
    },
    {
      id: 4,
      name: "Allen Bross",
      role: "Software Engineer",
      company: "Workiva",
      quote:
        "Yvette has a passion for her work that, combined with her willingness to embrace feedback, makes her invaluable on projects.",
    },
  ];

  const total = testimonials.length;

  // Compute which 3 testimonials to show starting at `index`
  const visibleTestimonials = Array.from(
    { length: Math.min(VISIBLE_COUNT, total) },
    (_, i) => testimonials[(index + i) % total]
  );

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-advance when not hovered and when there's more than one "page"
  useEffect(() => {
    if (isHovered || total <= VISIBLE_COUNT) return;

    const timer = setInterval(handleNext, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [isHovered, total]);

  return (
    <section
      className="py-16 bg-slate-50"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="testimonials-heading"
            className="text-4xl font-extrabold text-slate-900 mb-4"
          >
            What Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take my word for it — hear from people I've worked with
          </p>
        </motion.div>

        <div className="relative">
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 md:px-10">
            {visibleTestimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full transition-shadow duration-300 group">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <Quote
                      className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                    <p className="text-slate-700 mb-6 flex-grow italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="pt-4 border-t border-slate-100">
                      <p className="font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-slate-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Prev button */}
          <button
            type="button"
            onClick={handlePrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 h-10 w-10"
            aria-label="Show previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 h-10 w-10"
            aria-label="Show next testimonials"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
