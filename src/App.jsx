import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Code } from "lucide-react";
import "./index.css";

const projects = [
  { 
    id: 1, 
    title: "TaskFlow", 
    description: "Task management app designed for organized productivity.", 
    tags: ["React","Docker","LocalStorage"], 
    link: "https://taskflow-47a32.web.app/add" 
  },

  { 
    id: 2, 
    title: "TeeLuxe",
    description: "Teeluxe brings modern minimalist fashion to everyday style.", 
    tags: ["Docker", "Laravel", "Python"], 
    link: "https://tee-luxe.web.app/"
  },

  { id: 3, 
    title: "Roblox Club",
    description: "Roblox Club is a creative hub that builds fun hangout experiences", 
    tags: ["Roblox Studio","Lua","Game Dev"], 
    link: "https://www.roblox.com/share?code=d7f4e33b83002e49aab65271c7f6f105&type=ExperienceDetails&stamp=1763783094474" 
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 antialiased">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-tight">Portfolio</h1>
        <nav className="space-x-4 hidden md:flex items-center">
          <a href="#about" className="text-sm">About</a>
          <a href="#skills" className="text-sm">Skills</a>
          <a href="#projects" className="text-sm">Projects</a>
          <a href="#contact" className="text-sm">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-wider text-[#0451c4] font-semibold">Hi, I'm</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">Jomari Chan</h2>
            <p className="mt-4 text-gray-700">I build responsive and accessible web apps for seamless user experiences.</p>

            <div className="mt-6 flex gap-3"> 
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm border hover:shadow-md transition"
                >
                  <Code size={16}/> View projects
                </a>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0451c4] text-white hover:bg-[#0341a0] transition"
                >
                  <Mail size={16}/> Contact me
                </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }} 
            className="p-6 rounded-2xl bg-white shadow-md"
          >
             <div className="flex items-center gap-4">
              {/* Local profile picture */}
              <img
                src="/Profile.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-[#0451c4] shadow"
              />
              <div>
                <p className="font-semibold">Jomari Chan</p>
                <p className="text-sm text-gray-500">Game Dev • React • UI</p>
              </div>
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-600">
              <div>
                <dt className="font-medium">Location</dt>
                <dd>Philippines</dd>
              </div>
              <div>
                <dt className="font-medium">Availability</dt>
                <dd>Open to work</dd>
              </div>
              <div>
                <dt className="font-medium">Email</dt>
                <dd>jomarichan@gmail.com</dd>
              </div>
              <div>
                <dt className="font-medium">Course</dt>
                <dd>BS Computer Science</dd>
              </div>
            </dl>
          </motion.div>
        </section>

        <section id="about" className="py-8">
          <h3 className="text-2xl font-bold">About me</h3>
          <p className="mt-3 text-gray-700">I am a student from the University of Cabuyao who is passionate about web development, UI design, and creating clean. I enjoy working with other modern tools that help bring ideas to life. My goal is to build meaningful projects that showcase my skills and creativity while preparing myself for real world opportunities in tech.</p>
        </section>

        <section id="skills" className="py-8">
          <h3 className="text-2xl font-bold">Skills</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["React",
              "JavaScript",
              "HTML & CSS",
              "Tailwind",
              "Git & GitHub",
              "Figma",
              "Roblox Studio",
              "Python"
            ].map(s=>
              <div key={s} className="p-3 rounded-lg border text-sm text-center">{s}</div>
            )}
          </div>
        </section>

        <section id="projects" className="py-8">
          <h3 className="text-2xl font-bold">Selected projects</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {projects.map(p=>
            <motion.article 
              key={p.id} 
              whileHover={{ translateY: -6 }} 
              className="p-4 rounded-xl bg-white shadow-sm border"
            >
              <h4 className="font-semibold">{p.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t=>
                  <span key={t} className="text-xs px-2 py-1 rounded-md border">{t}</span>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <a href={p.link} className="text-sm underline">View</a>
                <div className="flex items-center gap-3 text-gray-500">
                  <a href="#" aria-label="GitHub">
                    <Github size={18}/>
                  </a>
                  <a href="#" aria-label="Live">
                    <Code size={18}/>
                  </a>
                </div>
              </div>
            </motion.article>
          )}
          </div>
        </section>
        
        <section id="contact" className="py-8">
          <h3 className="text-2xl font-bold">Contact</h3>
          <p className="mt-3 text-gray-700">Want to work together or ask something? Drop a message.</p>

          <form className="mt-4 grid gap-3 md:grid-cols-2">
            <input
              className="p-3 rounded-lg border col-span-2 md:col-span-1" 
              placeholder="Your name" 
              aria-label="name"
            />
            <input 
              className="p-3 rounded-lg border col-span-2 md:col-span-1" 
              placeholder="Your email" 
              type="email" 
              aria-label="email"
            />
            <textarea 
              className="p-3 rounded-lg border col-span-2" 
              placeholder="Message" rows={5}
            />
            <div 
              className="col-span-2 flex items-center gap-3">
              <button 
                type="submit" 
                className="px-4 py-2 rounded-lg bg-[#0451c4] text-white hover:bg-[#0341a0] transition">Send message
              </button>
              
              <div className="ml-auto flex gap-2">
                <a href="#" aria-label="github"className="inline-flex items-center gap-2">
                <Github size={16}/>
                </a>
                <a href="#" aria-label="linkedin" className="inline-flex items-center gap-2">
                <Linkedin size={16}/>
                </a>
              </div>
            </div>
          </form>
        </section>

        <footer className="py-12 text-center text-sm text-gray-500">
          <p>Bringing creative visions to life through design {new Date().getFullYear()}</p>
        </footer>
      </main>
    </div>
  );
}
