import {
  Palette,
  Code,
  Users,
  Lightbulb,
  Layers,
  Zap,
  Wrench,
  BarChart3,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import msuLogo from "../assets/MSUlogo.jpg";
import utahSageLogo from "../assets/ESS_logo.png";
import { BeakerIcon } from "../components/BeakerIcon";

export function SkillsExperience() {
  const skills = [
    {
      name: "UI Design",
      level: 90,
      icon: Palette,
      description:
        "Designing intuitive, accessible interfaces using layout, typography, color, and design systems to communicate information clearly and support user goals.",
    },
    {
      name: "UX Research",
      level: 90,
      icon: Users,
      description:
        "Conducting usability tests, interviews, surveys, and heuristic evaluations to understand user needs, frustrations, and workflows, optimizing research-backed design decisions.",
    },
    {
      name: "Prototyping",
      level: 88,
      icon: Zap,
      description:
        "Creating interactive low- to high-fidelity prototypes in Figma and Adobe XD to explore user flows, validate ideas early, and communicate design intent to stakeholders and developers.",
    },
    {
      name: "Front-end Basics",
      level: 75,
      icon: Code,
      description:
        "Building responsive layouts and interactive components using HTML, CSS, JavaScript/TypeScript, and React fundamentals to bridge design and development.",
    },
  ];

  const toolCategories = [
    {
      category: "Design & Creative Skills",
      icon: Palette,
      tools: [
        "User research",
        "Requirements gathering",
        "Persona development",
        "Wireframing and prototyping",
        "Unified Modeling Language Diagramming",
        "Information architecture",
      ],
    },
    {
      category: "Design Tools",
      icon: Wrench,
      tools: [
        "Figma",
        "Adobe XD",
        "Adobe Illustrator",
        "MS PowerPoint",
        "Draw.io",
      ],
    },
    {
      category: "Survey Technologies",
      icon: Users,
      tools: ["Qualtrics", "Google Forms"],
    },
    {
      category: "Data Visualization",
      icon: BarChart3,
      tools: [
        "R ggplot2",
        "plotly",
        "matplotlib",
        "D3.js",
        "Recharts",
        "react-gauge-components",
        "ArcGIS Pro",
      ],
    },
    {
      category: "Development Environments",
      icon: Code,
      tools: ["VS Code", "IntelliJ", "R Studio"],
    },
    {
      category: "Front-end Development",
      icon: Code,
      tools: ["HTML/CSS", "JavaScript/TypeScript", "React", "RShiny"],
    },
    {
      category: "Programming Languages",
      icon: Code,
      tools: ["R", "Python", "Java", "SQL", "MATLAB"],
    },
    {
      category: "Documentation",
      icon: Lightbulb,
      tools: ["Overleaf", "R Markdown/Quarto", "Docusaurus", "Adobe Express"],
    },
    {
      category: "Version Control",
      icon: Zap,
      tools: ["Git", "GitHub", "GitLab"],
    },
  ];

  const experience = [
    {
      title: "Human Centric Software Quality Analyst",
      subtitle: "Graduate Research Assistant",
      company:
        "Montana State University - Software Engineering & Cyber Security Lab",
      period: "2023 - Present",
      website: "montana.edu/cyber",
      logo: msuLogo,
      highlights: [
        "Conducted user research and usability testing to evaluate software quality from a human-centered perspective",
        "Designed and implement surveys and interview protocols to gather user feedback on research software tools",
        "Collaborated with development teams to translate user needs into actionable UI/UX improvements",
        "Created data visualizations and reports to communicate research findings to diverse stakeholders",
      ],
    },
    {
      title: "Environmental Researcher",
      subtitle: "Graduate Research Assistant",
      company: "University of Utah - SAGE Lab",
      period: "2020 - 2023",
      website: "utah.edu",
      logo: utahSageLogo,
      highlights: [
        "Conducted scientific research and data analysis across multiple interdisciplinary projects",
        "Developed data visualization dashboards to communicate complex scientific findings",
        "Collaborated with cross-functional research teams and presented findings to academic audiences",
        "Establish and maintained detailed documentation and research protocols ensuring data quality and reproducibility",
      ],
    },
    {
      title: "Inorganic Chemistry Assistant Supervisor",
      company: "American West Analytical Labs",
      period: "2016 - 2020",
      website: "",
      logo: BeakerIcon,
      highlights: [
        "Trained 30+ employees on EPA and laboratory methods",
        "Supervised daily laboratory operations and mentored junior chemists on analytical techniques and quality standards",
        "Operated and maintained 6+ analytical instruments to ensure proper functionality and enhance laboratory testing capabilities",
        "Implemented quality control procedures ensuring accuracy and compliance with EPA and industry regulations",
      ],
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-8 sm:mb-12 text-center">
        Skills & Experience
      </h1>

      <section aria-labelledby="core-skills-heading" className="mb-12 sm:mb-16">
        <h2 id="core-skills-heading" className="text-slate-800 mb-6 sm:mb-8">
          Core Skills
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card key={skill.name}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-2 bg-blue-100 rounded-lg"
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-800">{skill.name}</span>
                        <span
                          className="text-slate-600"
                          aria-label={`${skill.level} percent proficiency`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                        aria-label={`${skill.name} proficiency level`}
                      />
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed italic text-center mt-2">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="tools-heading" className="mb-12 sm:mb-16">
        <h2 id="tools-heading" className="text-slate-800 mb-6 sm:mb-8">
          Tools & Technologies
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {toolCategories.map((toolCategory) => {
            const Icon = toolCategory.icon;
            return (
              <Card key={toolCategory.category}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-800">
                    <div
                      className="p-2 bg-blue-100 rounded-lg"
                      aria-hidden="true"
                    >
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span>{toolCategory.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="flex flex-wrap gap-2 justify-center text-center"
                    role="list"
                    aria-label={`${toolCategory.category} tools`}
                  >
                    {toolCategory.tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="secondary"
                        className="px-3 py-1"
                        role="listitem"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-slate-800 mb-6 sm:mb-8">
          Work Experience
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {experience.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    {typeof job.logo === "string" ? (
                      <ImageWithFallback
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-blue-50 rounded-lg">
                        <job.logo
                          className="w-8 h-8 text-blue-600"
                          aria-hidden="true"
                        />
                      </div>
                    )}

                    <div>
                      <p className="text-slate-800">{job.title}</p>
                      {job.subtitle && (
                        <p className="text-sm text-slate-500 italic">
                          {job.subtitle}
                        </p>
                      )}
                      {job.website ? (
                        <a
                          href={`https://${job.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {job.company}
                        </a>
                      ) : (
                        <p className="text-slate-700">{job.company}</p>
                      )}
                    </div>
                  </div>
                  <Badge variant="outline" className="self-start">
                    {job.period}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2" role="list">
                  {job.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-slate-600"
                      role="listitem"
                    >
                      <span className="text-blue-600 mt-1" aria-hidden="true">
                        •
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
