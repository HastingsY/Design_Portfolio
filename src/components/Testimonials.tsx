import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ann Marie Reinhold",
      role: "Co-Director Software Engineering & Cyber Security Lab (SECL)",
      company: "Montana State University",
      quote:
        "Yvette does an excellent job asking our customers the right questions to identify pain points. She has the skills and drive to implement solutions that meet their needs and exceed their expectations.",
    },
    {
      id: 2,
      name: "Ryan Cummings",
      role: "Research Engineer",
      company: "Montana State University",
      quote:
        "Yvette's work broadly in the SECL and specifically on visualizing PIQUE output has made it easy to navigate and understand complex data. Her attention to quality in use brings a desperately needed perspective to software engineering.",
    },
    {
      id: 3,
      name: "Allen Bross",
      role: "Software Engineer",
      company: "Workiva",
      quote: "",
    },
  ];

  return (
    <section
      className="py-16 bg-slate-50"
      aria-labelledby="testimonials-heading"
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
            Don't just take my word for it — hear from people
            I've worked with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
      </div>
    </section>
  );
}