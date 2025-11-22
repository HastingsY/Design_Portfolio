import { useState } from "react";
import { motion } from "motion/react";
import { FileText, Download, Camera } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Testimonials } from "./Testimonials";
import profilePic from "../assets/picture.jpg";
import cvPdf from "../assets/Hastings_CV_PhD_updated_Oct_2025.pdf";
import horse from "../assets/horseriding.jpg";
import kayaking from "../assets/kayaking.jpg";
import tetons from "../assets/tetons.jpg";
import speedlimit from "../assets/speedlimit.jpg";
import albania from "../assets/PXL_20230905_092458911.jpg";

export function AboutMe() {
  const [cvOpen, setCvOpen] = useState(false);
  const cvPdfPath = cvPdf;

  const handleViewCV = () => {
    window.open(cvPdfPath, "_blank");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvPdfPath;
    link.download = "Yvette_Hastings_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const galleryImages = [
    {
      src: horse,
      alt: "Horse back riding in the mountains",
    },
    {
      src: kayaking,
      alt: "Kayaking",
    },
    {
      src: speedlimit,
      alt: "Remember to slow down and enjoy the journey",
    },
    {
      src: albania,
      alt: "Travels in Albania",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      {/* Main About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16"
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl font-extrabold text-slate-900 mb-4"
          >
            Hi, I'm Yvette D. Hastings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl font-semibold text-blue-600 mb-6"
          >
            UI/UX Designer & Software Engineer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4 text-slate-600 text-lg"
          >
            <p>
              I'm an analytical chemist turned UI/UX focused software engineer.
              My journey to software engineering began with a question: how can
              scientists better communicate their work and findings to policy
              makers? That question sparked a career change and a deep interest
              in bridging the gap between science and technology.
            </p>
            <p>
              During my continued education, I explored a range of scientific
              disciplines. This exploration led me to develop a strong curiosity
              for data science and visualization—particularly how complex
              information can be made accessible and actionable through
              thoughtful design. My curiosity grew even deeper during my
              master's degree, ultimately leading me to specialize in UI/UX
              design for data-driven applications.
            </p>
            <p>
              Today, my unique background in analytical chemistry gives me a
              distinctive edge: I understand how to translate technical
              complexity into clear, intuitive interfaces. My approach combines
              user research, visual design, and interaction design to solve
              complex problems with elegant solutions. I focus on improving
              software quality by understanding what truly matters to the people
              who use it—then designing and building visualization tools that
              meet the needs of diverse stakeholders.
            </p>
            <p>
              When I'm not designing, you'll find me exploring new design tools,
              reading about software quality, or meditating under a tree.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button
              onClick={handleViewCV}
              size="lg"
              className="group flex items-center justify-center gap-2 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 hover:scale-105 transition-transform"
              aria-label="View curriculum vitae"
            >
              <FileText
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              View CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadCV}
              className="group flex items-center justify-center gap-2 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 hover:scale-105 transition-transform"
              aria-label="Download curriculum vitae as PDF"
            >
              <Download
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                aria-hidden="true"
              />
              Download CV
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative order-first md:order-last"
        >
          <div className="aspect-square rounded-2xl overflow-hidden bg-slate-200 shadow-2xl">
            <ImageWithFallback
              src={profilePic}
              alt="Yvette D. Hastings, UI/UX Designer, working at desk with design tools"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-blue-600 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-2xl shadow-2xl"
            role="img"
            aria-label="5 plus years of experience"
          >
            <p className="text-lg font-bold">3+ Years</p>
            <p className="text-sm opacity-90">Experience</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Photo Gallery Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
        aria-labelledby="gallery-heading"
      >
        <div className="flex items-center gap-3 mb-8">
          <Camera className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h2
            id="gallery-heading"
            className="text-3xl font-extrabold text-slate-900"
          >
            Hobbies & Interests
          </h2>
        </div>
        <p className="text-slate-600 mb-6 max-w-2xl">
          When I'm not designing, I enjoy staying active and creative through
          various hobbies that inspire my work.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="aspect-square rounded-xl overflow-hidden shadow-lg"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  );
}
