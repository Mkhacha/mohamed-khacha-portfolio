import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedWork from './components/FeaturedWork'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import AmbientEffects from './components/AmbientEffects'

export default function App() {
  return (
    <div className="bg-surface text-text-primary min-h-screen relative selection:bg-accent/20">
      <AmbientEffects />
      <Navbar />
      <Hero />
      <About />
      <FeaturedWork />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </div>
  )
}
