import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import LangScrambleRoot from './components/LangScrambleRoot'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LangScrambleRoot>
          <div className="site-grain min-h-screen">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Work />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        </LangScrambleRoot>
      </LanguageProvider>
    </ThemeProvider>
  )
}
