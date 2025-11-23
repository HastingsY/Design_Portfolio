import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "../data/projects";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">
          My Projects
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Explore detailed case studies showcasing my design process and
          problem-solving approach
        </p>
      </motion.div>

      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center justify-center gap-3 mb-12 flex-wrap"
      >
        <Filter className="w-5 h-5 text-slate-600" aria-hidden="true" />
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
            className="hover:scale-105 transition-transform"
          >
            {category}
          </Button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/projects/${project.id}`}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={project.heroImage}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 right-4 bg-white text-slate-900">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-slate-600 mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.slice(0, 3).map((tool, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                    {project.tools.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tools.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-6 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    <span>View Project Details</span>
                    <ArrowRight
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-xl text-slate-600">
            No projects found in this category.
          </p>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <Card className="bg-blue-600 text-white border-0">
          <CardContent className="py-12">
            <h3 className="text-3xl font-extrabold mb-4">Like what you see?</h3>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how I can help bring your project to life
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="group hover:scale-105 transition-transform"
              >
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
