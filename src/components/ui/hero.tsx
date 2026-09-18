"use client"
import { useEffect, useRef, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

interface ShaderShowcaseProps {
  id?: string
  showHeader?: boolean
  hideBackground?: boolean
}

export default function ShaderShowcase({
  id = "home",
  showHeader = true,
  hideBackground = false,
}: ShaderShowcaseProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      id={id}
      ref={containerRef}
      className={`min-h-screen relative overflow-hidden ${hideBackground ? "bg-transparent" : "bg-black"}`}
    >
      {/* Anchor target for navbar 'About' link */}
      <div id="about" className="absolute top-0 pointer-events-none" aria-hidden="true" />
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#06b6d4" />
            <stop offset="70%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {!hideBackground && (
        <>
          <MeshGradient
            className="absolute inset-0 w-full h-full"
            colors={["#000000", "#06b6d4", "#0891b2", "#164e63", "#f97316"]}
            speed={0.3}
            // @ts-expect-error - compatibility with 21st.dev template
            backgroundColor="#000000"
          />
          <MeshGradient
            className="absolute inset-0 w-full h-full opacity-60"
            colors={["#000000", "#ffffff", "#06b6d4", "#f97316"]}
            speed={0.2}
            // @ts-expect-error - compatibility with 21st.dev template
            wireframe="true"
            backgroundColor="transparent"
          />
        </>
      )}

      {showHeader && (
        <header className="relative z-20 flex items-center justify-between p-6">
          <motion.div
            className="flex items-center group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.svg
              fill="currentColor"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="size-10 text-white group-hover:drop-shadow-lg transition-all duration-300"
              style={{
                filter: "url(#logo-glow)",
              }}
              whileHover={{
                fill: "url(#logo-gradient)",
                rotate: [0, -2, 2, 0],
                transition: {
                  fill: { duration: 0.3 },
                  rotate: { duration: 0.6, ease: "easeInOut" },
                },
              }}
            >
              <motion.path
                d="M15 85V15h12l18 35 18-35h12v70h-12V35L45 70h-10L17 35v50H15z"
                initial={{ pathLength: 1 }}
                whileHover={{
                  pathLength: [1, 0, 1],
                  transition: { duration: 1.2, ease: "easeInOut" },
                }}
              />
            </motion.svg>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/60 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="flex items-center space-x-2">
            <a
              href="#"
              className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              Docs
            </a>
          </nav>

          {/* Login Button Group with Arrow */}
          <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
            <button className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
              Login
            </button>
          </div>
        </header>
      )}

      <main className="relative z-20 w-full min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: About Me Bio, Stats, CTAs */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <motion.div
              className="inline-flex items-center px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm mb-4 sm:mb-6 relative border border-white/10 w-fit max-w-full"
              style={{
                filter: "url(#glass-effect)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent rounded-full" />
              <span className="text-cyan-300 text-xs sm:text-sm font-medium relative z-10 tracking-wide flex items-center gap-2 truncate">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
                Full-Stack Developer & Software Engineer
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                className="block font-light text-white/90 text-xl sm:text-3xl md:text-4xl mb-1 tracking-wider"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #06b6d4 30%, #f97316 70%, #ffffff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "url(#text-glow)",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Hi, I am
              </motion.span>
              <span className="block font-black text-white drop-shadow-2xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl break-words">
                Ebenezer Adjei
              </span>
              <span className="block font-light text-white/80 italic text-base sm:text-2xl md:text-3xl mt-2 text-cyan-200/90 leading-snug">
                Engineering Elegant Solutions to Real-World Problems
              </span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg font-light text-white/75 mb-6 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I am a dedicated <span className="text-white font-medium">Full-Stack Developer</span> with a strong foundation in building intuitive, high-performance web applications from the ground up. I specialise in <span className="text-cyan-300 font-medium">React, TypeScript, and modern JavaScript</span> ecosystems — delivering end-to-end digital solutions that are clean, scalable, and impactful.
            </motion.p>

            {/* About Stats Cards */}
            <motion.div
              className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl p-2.5 sm:p-4 text-center hover:border-cyan-400/40 transition-all duration-300">
                <span className="block text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">11+</span>
                <span className="text-[9px] sm:text-xs font-mono uppercase text-white/60 tracking-wider">Projects</span>
              </div>
              <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl p-2.5 sm:p-4 text-center hover:border-orange-400/40 transition-all duration-300">
                <span className="block text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">5+</span>
                <span className="text-[9px] sm:text-xs font-mono uppercase text-white/60 tracking-wider">Years Exp</span>
              </div>
              <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl p-2.5 sm:p-4 text-center hover:border-cyan-400/40 transition-all duration-300">
                <span className="block text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">12+</span>
                <span className="text-[9px] sm:text-xs font-mono uppercase text-white/60 tracking-wider">Tech Tools</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex items-center gap-2.5 sm:gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="w-full sm:w-auto justify-center text-center px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-orange-500 text-white font-semibold text-xs sm:text-sm transition-all duration-300 hover:from-cyan-400 hover:to-orange-400 cursor-pointer shadow-lg hover:shadow-cyan-500/25 inline-flex items-center gap-2"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                View Projects →
              </motion.a>
              <motion.a
                href="#contact"
                className="flex-1 sm:flex-initial justify-center text-center px-5 sm:px-7 py-3 rounded-full bg-transparent border border-white/30 text-white font-medium text-xs sm:text-sm transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-100 cursor-pointer backdrop-blur-sm inline-flex items-center gap-2"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#skills"
                className="flex-1 sm:flex-initial justify-center text-center px-4 sm:px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white font-normal text-xs sm:text-sm transition-all duration-300 hover:bg-white/10 cursor-pointer backdrop-blur-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Tech Stack ↓
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Picture Image Section + Pulsing Hologram Badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full mt-4 lg:mt-0">
            <motion.div
              className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[390px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Ambient Glow behind image */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/30 via-orange-500/20 to-cyan-500/10 rounded-3xl blur-2xl opacity-75"></div>

              {/* Picture Card Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-white/[0.03] backdrop-blur-xl shadow-2xl group">
                <div className="aspect-[4/5] w-full overflow-hidden relative">
                  <img
                    src="/kobby.jpg"
                    alt="Ebenezer Adjei - Full-Stack Developer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Top Status Tag */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 text-[11px] sm:text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Available for hire</span>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <p className="text-white font-semibold text-base sm:text-lg drop-shadow">Ebenezer Adjei</p>
                    <p className="text-cyan-300 text-xs font-mono">Full-Stack Developer</p>
                  </div>
                </div>
              </div>

              {/* Pulsing Border Badge Seal */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-7 sm:-right-7 z-30 scale-85 sm:scale-100">
                <div className="relative w-22 h-22 sm:w-28 sm:h-28 flex items-center justify-center">
                  <PulsingBorder
                    colors={["#06b6d4", "#0891b2", "#f97316", "#00FF88", "#FFD700", "#FF6B35", "#ffffff"]}
                    colorBack="#00000000"
                    speed={1.5}
                    roundness={1}
                    thickness={0.1}
                    softness={0.2}
                    intensity={5}
                    // @ts-expect-error - compatibility with 21st.dev template
                    spotsPerColor={5}
                    spotSize={0.1}
                    pulse={0.1}
                    smoke={0.5}
                    smokeSize={4}
                    scale={0.65}
                    rotation={0}
                    frame={9161408.251009725}
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                    }}
                  />

                  {/* Rotating Text Around the Pulsing Border */}
                  <motion.svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{ transform: "scale(1.4)" }}
                  >
                    <defs>
                      <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                    </defs>
                    <text className="text-[11px] fill-white/90 font-medium tracking-widest font-mono">
                      <textPath href="#circle" startOffset="0%">
                        EBENEZER ADJEI • SOFTWARE ENGINEER • FULL-STACK DEVELOPER •
                      </textPath>
                    </text>
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
