import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import ResumeModal from '@/components/ResumeModal'
import CommandPalette from '@/components/CommandPalette'

export default function Home() {
  return (
    <main className="bg-bg min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <ResumeModal />
      <CommandPalette />
    </main>
  )
}
