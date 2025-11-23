import { Link } from "react-router-dom";
import { Linkedin, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Skills & Experience", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/yvette-hastings-2a47231b",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/HastingsY",
    },
  ];

  return (
    <footer
      className="bg-white border-t border-slate-200 mt-auto"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navigation Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <nav aria-label="Social media links">
            <ul className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded p-1"
                      aria-label={`Visit my ${social.label} profile`}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-slate-200 text-center">
          <p className="text-slate-600 text-sm">
            © {currentYear} Yvette D. Hastings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
