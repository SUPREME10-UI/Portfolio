"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Twitter,
  Youtube,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileSlide {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
}

const slides: ProfileSlide[] = [
  {
    name: "Kobby",
    title: "Full-Stack Developer",
    description:
      "I am a passionate Full-Stack Developer with over 5 years of experience crafting digital solutions that bridge the gap between complex backend architectures and intuitive, high-performance user interfaces. I thrive on solving complex problems and turning abstract ideas into functional reality.",
    imageUrl: "/kobby.jpg",
    githubUrl: "https://github.com",
    twitterUrl: "https://twitter.com",
    youtubeUrl: "https://youtube.com",
    linkedinUrl: "https://linkedin.com",
  },
  {
    name: "Kobby",
    title: "Creative Problem Solver",
    description:
      "My journey began with a curiosity for how things work, which naturally led me to the world of software engineering. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical writing and mentorship.",
    imageUrl: "/kobby.jpg",
    githubUrl: "https://github.com",
    twitterUrl: "https://twitter.com",
    youtubeUrl: "https://youtube.com",
    linkedinUrl: "https://linkedin.com",
  },
  {
    name: "Kobby",
    title: "Open-Source Enthusiast",
    description:
      "With 50+ projects completed and 20+ tools in my tech stack, I build things that matter. My philosophy is simple: write clean, scalable code and never stop learning. From cloud infrastructure to pixel-perfect UIs, I bring ideas to life at every layer of the stack.",
    imageUrl: "/kobby.jpg",
    githubUrl: "https://github.com",
    twitterUrl: "https://twitter.com",
    youtubeUrl: "https://youtube.com",
    linkedinUrl: "https://linkedin.com",
  },
];

export interface ProfileCarouselProps {
  className?: string;
}

export function ProfileCarousel({ className }: ProfileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % slides.length);
  const handlePrevious = () =>
    setCurrentIndex((index) => (index - 1 + slides.length) % slides.length);

  const current = slides[currentIndex];

  const socialIcons = [
    { icon: Github, url: current.githubUrl, label: "GitHub" },
    { icon: Twitter, url: current.twitterUrl, label: "Twitter" },
    { icon: Youtube, url: current.youtubeUrl, label: "YouTube" },
    { icon: Linkedin, url: current.linkedinUrl, label: "LinkedIn" },
  ];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className="hidden md:flex relative items-center">
        {/* Avatar */}
        <div className="w-[420px] h-[470px] rounded-3xl overflow-hidden flex-shrink-0 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.imageUrl + currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <img
                src={current.imageUrl}
                alt={current.name}
                className="w-full h-full object-cover object-top"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title + currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-1">
                  {current.name}
                </h2>
                <p className="text-sm font-medium text-cyan-300">
                  {current.title}
                </p>
              </div>

              <p className="text-white/80 text-base leading-relaxed mb-8">
                {current.description}
              </p>

              <div className="flex space-x-4">
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  <a
                    key={label}
                    href={url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/15 hover:bg-cyan-500/30 border border-white/20 hover:border-cyan-400/50 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                    aria-label={label}
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden max-w-sm mx-auto text-center">
        {/* Avatar */}
        <div className="w-full aspect-square rounded-3xl overflow-hidden mb-6 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.imageUrl + currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <img
                src={current.imageUrl}
                alt={current.name}
                className="w-full h-full object-cover object-top"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className="px-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title + currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className="text-xl font-bold text-white mb-1">
                {current.name}
              </h2>
              <p className="text-sm font-medium text-cyan-300 mb-4">
                {current.title}
              </p>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                {current.description}
              </p>
              <div className="flex justify-center space-x-4">
                {socialIcons.map(({ icon: IconComponent, url, label }) => (
                  <a
                    key={label}
                    href={url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/15 hover:bg-cyan-500/30 border border-white/20 hover:border-cyan-400/50 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
                    aria-label={label}
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex justify-center items-center gap-6 mt-8">
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label="Previous"
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              className={cn(
                "transition-all duration-300 cursor-pointer rounded-full",
                slideIndex === currentIndex
                  ? "w-6 h-3 bg-cyan-400"
                  : "w-3 h-3 bg-white/30 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label="Next"
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
