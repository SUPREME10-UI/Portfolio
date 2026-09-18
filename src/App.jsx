import './App.css'
import Navbar from './components/layout/Navbar'
import ShaderShowcase from './components/ui/hero'
import ShaderBackground from './components/ui/shader-background'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import ProfileCarousel from './components/ui/profile-card-testimonial-carousel'
import Footer from './components/layout/Footer'
import useScrollReveal from './hooks/useScrollReveal'
import useCursorGlow from './hooks/useCursorGlow'

function App() {
  useScrollReveal();
  useCursorGlow();

  return (
    <div className="app relative min-h-screen">
      <ShaderBackground />
      <Navbar />
      <main className="relative z-10">
        <ShaderShowcase showHeader={false} hideBackground={true} />
        <div className="reveal"><Skills /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><Experience /></div>
        <section className="section py-16">
          <div className="container">
            <div className="text-center mb-10">
              <span className="mono text-cyan-400 text-sm tracking-widest uppercase block mb-2">// Highlights</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Philosophy & Story</h2>
            </div>
            <ProfileCarousel />
          </div>
        </section>
        <div className="reveal"><Contact /></div>
      </main>
      <Footer />
    </div>
  )
}

export default App
