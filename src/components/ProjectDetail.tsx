import { motion } from "motion/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Clock,
  Users,
  Award,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImageModal } from "./ImageModal";
import { projects } from "../data/projects";
import { NotFound } from "./NotFound";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <NotFound />;
  }

  const phaseData = [
    { key: "empathize", title: "Empathize", color: "bg-blue-500", icon: "🎯" },
    { key: "define", title: "Define", color: "bg-purple-500", icon: "📋" },
    { key: "ideate", title: "Ideate", color: "bg-green-500", icon: "💡" },
    {
      key: "prototype",
      title: "Prototype",
      color: "bg-orange-500",
      icon: "🎨",
    },
    { key: "test", title: "Test", color: "bg-pink-500", icon: "🧪" },
  ];

  const [activePhase, setActivePhase] = useState<string>("empathize");
  const [modalImages, setModalImages] = useState<string[] | null>(null);
  const [modalIndex, setModalIndex] = useState<number>(0);

  return (
    <main className="min-h-screen">
      {/* Back Button - Sticky */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-20 z-40 bg-gradient-to-b from-white via-white/95 to-transparent pb-4 pt-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/projects")}
            className="group shadow-md hover:shadow-lg bg-white border border-slate-200 hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[50vh] min-h-[400px] overflow-hidden"
      >
        <ImageWithFallback
          src={project.heroImage}
          alt={`${project.title} hero image`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Badge className="mb-4 text-base">{project.category}</Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {project.shortDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Project Meta Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {/* Year */}
          <Card>
            <CardContent className="pt-6 text-center">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-slate-600 mb-1">Year</p>
              <p className="font-semibold text-slate-900">{project.year}</p>
            </CardContent>
          </Card>

          {/* Duration */}
          <Card>
            <CardContent className="pt-6 text-center">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm text-slate-600 mb-1">Duration</p>
              <p className="font-semibold text-slate-900">{project.duration}</p>
            </CardContent>
          </Card>

          {/* Role */}
          <Card>
            <CardContent className="pt-6 text-center">
              <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm text-slate-600 mb-1">Role</p>
              <p className="font-semibold text-slate-900">{project.role}</p>
            </CardContent>
          </Card>

          {/* Team */}
          <Card>
            <CardContent className="pt-6 text-center">
              <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-sm text-slate-600 mb-1">Team</p>
              <p className="font-semibold text-slate-900">{project.team}</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Tools & Technologies – row 2, right column */}
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-slate-600 mb-2">
                Tools & Technologies
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {project.tools.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-3 py-1"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Client/Context Card - Show if available */}
          {project.client && (
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {project.client.logo && (
                    <ImageWithFallback
                      src={project.client.logo}
                      alt={`${project.client.name} logo`}
                      className="w-16 h-16 object-contain rounded-lg bg-white p-2 shadow-sm"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {project.client.name}
                    </h3>
                    {project.client.context && (
                      <p className="text-slate-700">{project.client.context}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Stats Section */}
        {project.stats && project.stats.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-extrabold text-center">
                  Impact & Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {project.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="text-center"
                    >
                      <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                        {stat.value}
                      </p>
                      <p className="text-sm text-slate-700 font-medium">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>
        )}

        <div className="space-y-12">
          {/* Main Content */}
          <div className="space-y-12">
            {/* Summary Sections: Problem / Solution / Benefits / Challenges */}
            {project.challenges ? (
              // Case 1: Challenges exists → two rows of 2
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Row 1: Problem + Solution */}
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* Problem */}
                  <div>
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                      The Problem
                    </h2>
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                          {project.problem}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Solution (if present) */}
                  {project.solution && (
                    <div>
                      <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                        The Solution
                      </h2>
                      <Card>
                        <CardContent className="pt-6">
                          <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                            {project.solution}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>

                {/* Row 2: Benefits + Challenges */}
                {project.benefits && (
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                      <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                        The Benefits
                      </h2>
                      <Card>
                        <CardContent className="pt-6">
                          <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                            {project.benefits}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                        Challenges &amp; Resolution
                      </h2>
                      <Card>
                        <CardContent className="pt-6">
                          <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                            {project.challenges}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
              </motion.section>
            ) : (
              // Case 2: No Challenges → 3-column grid (Problem / Solution / Benefits)
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Problem */}
                  <div>
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                      The Problem
                    </h2>
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                          {project.problem}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Solution (if present) */}
                  {project.solution && (
                    <div>
                      <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                        The Solution
                      </h2>
                      <Card>
                        <CardContent className="pt-6">
                          <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                            {project.solution}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* Benefits (if present) */}
                  {project.benefits && (
                    <div>
                      <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                        The Benefits
                      </h2>
                      <Card>
                        <CardContent className="pt-6">
                          <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                            {project.benefits}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </motion.section>
            )}

            {/* Design Process Phases */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                Design Process
              </h2>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {phaseData.map((phase) => {
                  const isActive = activePhase === phase.key;
                  return (
                    <button
                      key={phase.key}
                      type="button"
                      onClick={() => setActivePhase(phase.key)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-lg font-semibold border transition-colors ${isActive
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                        }`}
                    >
                      <span className="text-lg">{phase.icon}</span>
                      <span>{phase.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active phase content */}
              {(() => {
                const phaseDef = phaseData.find((p) => p.key === activePhase)!;
                const phaseContent =
                  project.phases[phaseDef.key as keyof typeof project.phases];

                return (
                  <motion.div
                    key={phaseDef.key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden">
                      <div className={`h-2 ${phaseDef.color}`} />
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{phaseDef.icon}</span>
                          <div>
                            <CardTitle className="text-2xl font-bold">
                              {phaseDef.title}
                            </CardTitle>
                            <p className="text-sm text-slate-600 mt-1">
                              {phaseContent.title}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {/* Body text */}
                        <div className="text-slate-700 leading-relaxed text-lg space-y-4">
                          {phaseContent.content
                            .split("\n\n")
                            .map((paragraph, pIndex) => {
                              const lines = paragraph.split("\n");
                              const hasBoldHeader =
                                lines[0]?.startsWith("**") &&
                                lines[0]?.endsWith("**");

                              if (hasBoldHeader && lines.length > 1) {
                                const header = lines[0].replace(/\*\*/g, "");
                                const bullets = lines
                                  .slice(1)
                                  .filter((line) =>
                                    line.trim().startsWith("•")
                                  );

                                return (
                                  <div key={pIndex} className="space-y-2">
                                    <p className="font-bold text-slate-900">
                                      {header}
                                    </p>
                                    {bullets.length > 0 && (
                                      <ul className="space-y-1 ml-4">
                                        {bullets.map((bullet, bIndex) => (
                                          <li
                                            key={bIndex}
                                            className="text-slate-700"
                                          >
                                            {bullet.trim()}
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                );
                              } else {
                                const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                                return (
                                  <p key={pIndex}>
                                    {parts.map((part, partIndex) => {
                                      if (
                                        part.startsWith("**") &&
                                        part.endsWith("**")
                                      ) {
                                        return (
                                          <strong
                                            key={partIndex}
                                            className="font-bold text-slate-900"
                                          >
                                            {part.replace(/\*\*/g, "")}
                                          </strong>
                                        );
                                      }
                                      return (
                                        <span key={partIndex}>{part}</span>
                                      );
                                    })}
                                  </p>
                                );
                              }
                            })}
                        </div>

                        {/* Phase Images */}
                        {phaseContent.images &&
                          phaseContent.images.length > 0 && (
                            <div className="my-6">
                              <div className="grid md:grid-cols-2 gap-4">
                                {phaseContent.images.map((img, imgIndex) => (
                                  <motion.div
                                    key={imgIndex}
                                    whileHover={{ scale: 1.03 }}
                                    className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
                                    onClick={() => {
                                      setModalImages(phaseContent.images!);
                                      setModalIndex(imgIndex);
                                    }}
                                  >
                                    <ImageWithFallback
                                      src={img}
                                      alt={`${phaseDef.title} phase image ${imgIndex + 1
                                        }`}
                                      className="w-full h-64 object-cover"
                                    />
                                  </motion.div>
                                ))}
                              </div>

                              {phaseContent.imageCaption && (
                                <p className="mt-4 text-center text-sm text-slate-600 italic">
                                  {phaseContent.imageCaption}
                                </p>
                              )}
                            </div>
                          )}

                        {/* Phase Links */}
                        {phaseContent.links &&
                          phaseContent.links.length > 0 && (
                            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200">
                              {phaseContent.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  <span>{link.text}</span>
                                </a>
                              ))}
                            </div>
                          )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })()}
            </motion.section>

            {/* Outcome */}
            {project.outcome && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                  The Outcome
                </h2>
                <Card>
                  <CardContent className="pt-6 space-y-6">
                    <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                      {project.outcome.content}
                    </p>

                    {/* Outcome Images */}
                    {project.outcome.images &&
                      project.outcome.images.length > 0 && (
                        <div className="my-6">
                          <div className="grid md:grid-cols-2 gap-4 pt-4">
                            {project.outcome.images.map((img, imgIndex) => (
                              <motion.div
                                key={imgIndex}
                                whileHover={{ scale: 1.03 }}
                                className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
                                onClick={() => {
                                  if (project.outcome?.images) {
                                    setModalImages(project.outcome.images);
                                    setModalIndex(imgIndex);
                                  }
                                }}
                              >
                                <ImageWithFallback
                                  src={img}
                                  alt={`Outcome image ${imgIndex + 1}`}
                                  className="w-full h-64 object-cover"
                                />
                              </motion.div>
                            ))}
                          </div>

                          {/* ⭐ Outcome image group caption */}
                          {project.outcome.imageCaption && (
                            <p className="mt-4 text-center text-sm text-slate-600 italic">
                              {project.outcome.imageCaption}
                            </p>
                          )}
                        </div>
                      )}
                  </CardContent>
                </Card>
              </motion.section>
            )}

            {/* Reflections */}
            {project.reflections && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                  Reflections & Learnings
                </h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
                      {project.reflections}
                    </p>
                  </CardContent>
                </Card>
              </motion.section>
            )}

            {/* More Projects */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-extrabold">
                    More Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    {projects
                      .filter((p) => p.id !== project.id)
                      .slice(0, 2)
                      .map((otherProject) => (
                        <Link
                          key={otherProject.id}
                          to={`/projects/${otherProject.id}`}
                          className="block group"
                        >
                          <div className="rounded-lg overflow-hidden mb-2 border-2 h-[140px] flex items-center">
                            <ImageWithFallback
                              src={otherProject.heroImage}
                              alt={otherProject.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {otherProject.title}
                          </p>
                          <p className="text-sm text-slate-600">
                            {otherProject.category}
                          </p>
                        </Link>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <Card className="bg-blue-600 text-white border-0">
                <CardContent className="py-12 text-center">
                  <h3 className="text-3xl font-extrabold mb-4">
                    Interested in working together?
                  </h3>
                  <p className="text-xl mb-8 text-white/90">
                    Let's create something amazing for your users
                  </p>
                  <Link to="/contact">
                    <Button size="lg" variant="secondary" className="group">
                      Get In Touch
                      <ArrowLeft className="ml-2 w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {modalImages && (
        <ImageModal
          isOpen={true}
          imageSrc={modalImages[modalIndex]}
          imageAlt="Project image"
          onClose={() => {
            setModalImages(null);
            setModalIndex(0);
          }}
          onNext={
            modalImages.length > 1
              ? () => setModalIndex((prev) => (prev + 1) % modalImages.length)
              : undefined
          }
          onPrev={
            modalImages.length > 1
              ? () =>
                setModalIndex(
                  (prev) =>
                    (prev - 1 + modalImages.length) % modalImages.length
                )
              : undefined
          }
        />
      )}
    </main>
  );
}
