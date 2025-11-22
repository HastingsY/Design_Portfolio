import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Send,
  MapPin,
  Phone,
  Loader2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(
      "Message sent successfully! I'll get back to you soon.",
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yvettehastings@montana.edu",
      link: "mailto:yvettehastings@montana.edu",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bozeman, MT, USA",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/yvette-hastings-2a47231b",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/HastingsY",
      color: "hover:text-slate-800",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-4 text-center">
        Get In Touch
      </h1>
      <p className="text-slate-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? I'd love
        to hear from you. Feel free to reach out through the
        form or connect with me on social media.
      </p>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {contactInfo.map((info) => {
          const Icon = info.icon;
          const content = (
            <Card
              className={
                info.link
                  ? "cursor-pointer hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-blue-600"
                  : ""
              }
            >
              <CardContent className="pt-6 text-center">
                <div
                  className="inline-flex p-3 bg-blue-100 rounded-full mb-4"
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-slate-600 mb-1">
                  {info.label}
                </p>
                <p className="text-slate-800">{info.value}</p>
              </CardContent>
            </Card>
          );

          return info.link ? (
            <a
              key={info.label}
              href={info.link}
              className="focus:outline-none"
              aria-label={`${info.label}: ${info.value}`}
            >
              {content}
            </a>
          ) : (
            <div key={info.label}>{content}</div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-label="Contact form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-slate-700 mb-2"
                >
                  Name{" "}
                  <span
                    className="text-red-600"
                    aria-label="required"
                  >
                    *
                  </span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  aria-required="true"
                  className="focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-slate-700 mb-2"
                >
                  Email{" "}
                  <span
                    className="text-red-600"
                    aria-label="required"
                  >
                    *
                  </span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  aria-required="true"
                  className="focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-slate-700 mb-2"
                >
                  Subject{" "}
                  <span
                    className="text-red-600"
                    aria-label="required"
                  >
                    *
                  </span>
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  aria-required="true"
                  className="focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-slate-700 mb-2"
                >
                  Message{" "}
                  <span
                    className="text-red-600"
                    aria-label="required"
                  >
                    *
                  </span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  aria-required="true"
                  className="focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <Button
                type="submit"
                className="w-full focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-label="Send message"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2
                    className="w-4 h-4 mr-2 animate-spin"
                    aria-hidden="true"
                  />
                ) : (
                  <Send
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                  />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6 sm:space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-6">
                Follow me on social media to stay updated with
                my latest work and insights on UI/UX design.
              </p>
              <nav
                className="flex gap-4"
                aria-label="Social media links"
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${social.color}`}
                      aria-label={`Visit my ${social.label} profile`}
                    >
                      <Icon
                        className="w-6 h-6"
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </nav>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div
                      className="w-3 h-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg shadow-amber-500/50"
                      role="img"
                      aria-label="Limited availability status indicator"
                    />
                    <div className="absolute inset-0 w-3 h-3 bg-gradient-to-tl from-amber-300/50 to-transparent rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-amber-500 rounded-full blur-sm opacity-75" />
                  </div>
                  <p className="text-slate-800">
                    Limited freelance availability
                  </p>
                </div>
                <p className="text-slate-600">
                  I'm a student balancing academics and
                  freelance work. Typical response time is 24-48
                  hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}