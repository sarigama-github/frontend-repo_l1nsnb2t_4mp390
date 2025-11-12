import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Menu, X, ArrowRight, ExternalLink } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function App() {
  const [open, setOpen] = useState(false)

  const projects = [
    {
      title: 'Smart Attendance System',
      description:
        'Face-recognition based attendance with real-time tracking and analytics dashboard.',
      stack: ['Python', 'OpenCV', 'Django', 'SQLite'],
      link: '#'
    },
    {
      title: 'Campus Navigator',
      description:
        'Progressive web app that maps campus facilities with search, filters, and offline support.',
      stack: ['JavaScript', 'Leaflet', 'Firebase', 'PWA'],
      link: '#'
    },
    {
      title: 'DevBlog Platform',
      description:
        'Minimal blogging platform with markdown support, tags, and full-text search.',
      stack: ['Django', 'PostgreSQL', 'Tailwind'],
      link: '#'
    },
    {
      title: 'TaskFlow',
      description:
        'Kanban-style task manager with drag-and-drop and real-time collaboration.',
      stack: ['React', 'Node', 'Socket.io', 'MongoDB'],
      link: '#'
    },
  ]

  const skills = [
    'Python',
    'Django',
    'JavaScript',
    'HTML',
    'CSS',
    'MySQL',
    'Firebase',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-rose-50 text-slate-800 scroll-smooth">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-slate-900">Sasi Kumar</a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-shadow">
              Say Hello <ArrowRight size={16} />
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-white/60">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200/50 bg-white/70">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
              <a onClick={() => setOpen(false)} href="#about" className="py-1">About</a>
              <a onClick={() => setOpen(false)} href="#projects" className="py-1">Projects</a>
              <a onClick={() => setOpen(false)} href="#skills" className="py-1">Skills</a>
              <a onClick={() => setOpen(false)} href="#contact" className="py-1">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">Computer Science Graduate</span>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-slate-900">
              Hi, I’m Sasi Kumar.
              <br />I build clean, modern software.
            </h1>
            <p className="text-slate-600 max-w-xl">
              I enjoy crafting efficient backends and polished frontends. I’m looking for opportunities to contribute to impactful products and grow with a great team.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-md shadow-sm hover:shadow-md transition-all">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white/80 backdrop-blur text-slate-900 px-5 py-2.5 rounded-md shadow hover:shadow-md border border-slate-200">
                Contact Me <Mail size={16} />
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="GitHub" className="p-2 rounded-md bg-white/80 border border-slate-200 hover:shadow-md">
                <Github size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-white/80 border border-slate-200 hover:shadow-md">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-white/80 border border-slate-200 hover:shadow-md">
                <Twitter size={18} />
              </a>
            </div>
          </motion.div>

          {/* Spline hero object */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl shadow-xl overflow-hidden bg-white/60 border border-slate-200"
          >
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/10" />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">About Me</h2>
              <p className="text-slate-600 leading-relaxed">
                I’m a computer science graduate passionate about building intuitive products and solving practical problems. My interests span backend APIs, data-driven systems, and elegant user interfaces. Outside of code, I explore design systems and contribute to open-source.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3">Education</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 mt-2 rounded-full bg-indigo-400"></span>
                  <div>
                    <p className="font-medium">B.E. in Computer Science & Engineering</p>
                    <p className="text-sm text-slate-600">Your University • 2019 – 2023</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 mt-2 rounded-full bg-rose-300"></span>
                  <div>
                    <p className="font-medium">Coursework</p>
                    <p className="text-sm text-slate-600">Data Structures, DBMS, Operating Systems, Computer Networks</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 sm:py-24 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Projects</h2>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
              Get the full portfolio <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group block bg-white/80 backdrop-blur rounded-xl p-5 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <ExternalLink size={16} className="text-slate-400 group-hover:text-slate-600" />
                </div>
                <p className="text-sm text-slate-600 mt-2 mb-4 min-h-[48px]">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map(s => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shadow-xs">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8">Skills</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {skills.map((skill) => (
              <div key={skill} className="bg-white/80 backdrop-blur rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm font-medium text-slate-800">{skill}</p>
                <div className="mt-3 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-sky-300 to-rose-300" style={{ width: `${70 + Math.floor(Math.random() * 20)}%` }} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24 bg-white/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur rounded-2xl p-8 border border-slate-200 shadow-md"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Get in touch</h2>
            <p className="text-slate-600 mt-2">
              I’m open to roles, internships, and collaborations. Feel free to drop a message.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <a href="mailto:sasikumar@example.com" className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                <Mail className="text-indigo-500" size={18} />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-slate-600">sasikumar@example.com</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                <Linkedin className="text-indigo-500" size={18} />
                <div>
                  <p className="text-sm font-medium">LinkedIn</p>
                  <p className="text-sm text-slate-600">linkedin.com/in/sasikumar</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                <Github className="text-indigo-500" size={18} />
                <div>
                  <p className="text-sm font-medium">GitHub</p>
                  <p className="text-sm text-slate-600">github.com/sasikumar</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                <Twitter className="text-indigo-500" size={18} />
                <div>
                  <p className="text-sm font-medium">Twitter</p>
                  <p className="text-sm text-slate-600">twitter.com/sasikumar</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Sasi Kumar • Built with care
        </div>
      </footer>
    </div>
  )
}

export default App
