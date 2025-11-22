import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profilePic from "../assets/picture.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 opacity-60" />

      {/* Floating shapes for visual interest */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium">
                Open to freelance opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight"
            >
              Crafting Digital
              <span className="block text-blue-600">Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Hi, I'm{" "}
              <strong className="text-slate-800">Yvette D. Hastings</strong> — a
              creative UI/UX designer, software engineer, and problem-solver
              passionate about creating intuitive, clean interfaces designed to
              communicate complex data.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/projects">
                <Button
                  size="lg"
                  className="group text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  View My Work
                  <ArrowRight
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-105"
                >
                  Get In Touch
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-slate-200"
            >
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-slate-900">3+</p>
                <p className="text-sm text-slate-600">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-slate-900">3+</p>
                <p className="text-sm text-slate-600">Projects Completed</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-slate-900">20+</p>
                <p className="text-sm text-slate-600">Happy Clients</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <div className="relative aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
                <ImageWithFallback
                  src={profilePic}
                  alt="Yvette D. Hastings, UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg shadow-amber-500/50" />
                    <div className="absolute inset-0 w-3 h-3 bg-gradient-to-tl from-amber-300/50 to-transparent rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-amber-500 rounded-full blur-sm opacity-75" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Limited Availability
                    </p>
                    <p className="text-sm text-slate-600">Let's collaborate!</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
