import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import Slide1 from './Slide1'

function UI({ showProjectDetails, setShowProjectDetails }) {
  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY < window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Section 1: Intro */}
      <Slide1 />

      {/* Top Right Navigation Menu */}
      {showNav && (
        <nav className="fixed top-8 right-8 z-50 flex space-x-6">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-blue-400 transition-colors text-lg font-semibold"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="text-white hover:text-blue-400 transition-colors text-lg font-semibold"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-blue-400 transition-colors text-lg font-semibold"
          >
            Contact
          </button>
        </nav>
      )}

      {/* Section 2: About */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center p-8">
        <div className="animate-fade-in max-w-6xl mx-auto">
          {/* Introduction */}
          <h2 className="text-4xl text-white mb-6 text-left">Introduction</h2>

          {/* Overview */}
          <div className="mb-8 max-w-4xl">
            <h3 className="text-3xl font-bold text-white mb-4 text-left">Overview</h3>
            <p className="text-lg text-gray-300 leading-relaxed text-left">
             i'm a passionate Software Developer skilled in C++ and JavaScript, with hands-on experience in frameworks like React, TailwindCSS, and Bootstrap. I’m a fast learner eager to begin my career with a reputed organization. Let’s collaborate to turn your creative ideas into impactful web experiences!            </p>
          </div>

          {/* Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg border-2 border-blue-400 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce-in animate-pulse hover:animate-bounce">
              <div className="text-6xl mb-4 text-center animate-pulse" style={{ textShadow: '0 0 20px currentColor' }}>🌐</div>
              <h3 className="text-xl font-semibold text-white text-center">Web Developer</h3>
            </div>
            <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg border-2 border-green-400 hover:border-green-300 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce-in animate-pulse hover:animate-bounce" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-4 text-center animate-pulse" style={{ textShadow: '0 0 20px currentColor' }}>⚙️</div>
              <h3 className="text-xl font-semibold text-white text-center">Backend Developer</h3>
            </div>
            <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg border-2 border-purple-400 hover:border-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce-in animate-pulse hover:animate-bounce" style={{animationDelay: '0.4s'}}>
              <div className="text-6xl mb-4 text-center animate-pulse" style={{ textShadow: '0 0 20px currentColor' }}>🏆</div>
              <h3 className="text-xl font-semibold text-white text-center">Competitive Programmer</h3>
            </div>
            <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce-in animate-pulse hover:animate-bounce" style={{animationDelay: '0.6s'}}>
              <div className="text-6xl mb-4 text-center animate-pulse" style={{ textShadow: '0 0 20px currentColor' }}>⛓️</div>
              <h3 className="text-xl font-semibold text-white text-center">Blockchain Developer</h3>
            </div>
          </div>

          {/* Skills Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto mb-12">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                className="w-12 h-12 hover:scale-125 transition-all duration-300 animate-pulse hover:rotate-12 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
                className="w-12 h-12 hover:scale-125 transition-all duration-300 animate-pulse hover:rotate-12 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                style={{ animationDelay: '0.1s' }}
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                alt="C++"
                className="w-12 h-12 hover:scale-125 transition-all duration-300 animate-pulse hover:rotate-12 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                style={{ animationDelay: '0.2s' }}
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
                className="w-12 h-12 hover:scale-125 transition-all duration-300 animate-pulse hover:rotate-12 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                style={{ animationDelay: '0.3s' }}
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-12 h-12 hover:scale-125 transition-all duration-300 animate-pulse hover:rotate-12 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                style={{ animationDelay: '0.4s' }}
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
                className="w-12 h-12 hover:scale-125 transition-all duration-300 animate-pulse hover:rotate-12 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                style={{ animationDelay: '0.5s' }}
              />
            </div>
           
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="ReactJS"
                className="w-12 h-12 hover:scale-125 transition-all duration-300 animate-pulse hover:rotate-12 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                style={{ animationDelay: '0.7s' }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Work */}
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id="work">&nbsp;</span>
        <div style={{opacity: 1, transform: 'none'}}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My work</p>
          <h2 className="text-white font-black md:text-[50px] sm:text-[40px] xs:text-[40px] text-[30px]">Profiles</h2>
        </div>
        <div className="w-full flex">
          <p className="mt-3 text-secondary text-[17px] max-w-2xl leading-[30px]" style={{opacity: 1, transform: 'none'}}>Below are my coding profiles showcases my skills in programming world. It reflects my ability to solve complex problems. Each profiles contains my achivements please visit and explore my work.</p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          <a href="https://leetcode.com/u/rakshada_425/" target="_blank" rel="noopener noreferrer">
            <div style={{opacity: 1, transform: 'none'}}>
              <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer animate-fade-in" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', animationDelay: '0.1s'}}>
                <div className="relative w-full h-[230px]">
                  <img src="https://repository-images.githubusercontent.com/325106033/9d1e7c80-5a4b-11eb-90ce-992764864013" alt="project_image" className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-110" />
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABDUlEQVR4nOXXPyuFcRjG8cef/Fscg4HhTAzKYKBYLVZWf17BEW/BW6BMdosBb0BGkww2BilSFhmUwkdPPXWcwfpcyrX8xvtb9/277usuil+EOdxhoUgIAzjFG5ZTED3Yxwc2IxClsI1P7KK7SAjreMdR2Z4UxCJecIZGCmIa97hGMwUxjis8YiYF0cA5XrGUgujDYTWcaymILuzgq3wjEKWwVXnFAXqLhLBSWfcJhlIQ83jGBUZTEBO4wS0mUxBjuMRTxLAkATBVhZn6WyA5hNrf8BiDKSPaK5PU/7Bi9P9YRqt1Fx+JrWPtQPJQeyCRjGQ6Q+lw3cU3YrFc6jDReZq1aitc/IXjFLN1nOffkIi3Oj7ybK8AAAAASUVORK5CYII=" alt="source code" className="w-1/2 h-1/2 object-contain" />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-white font-bold text-[24px] hover:text-blue-400 transition-colors duration-300">LeetCode Profile</h3>
                  <p className="mt-2 text-secondary text-[14px]">My Leetcode profile, where I solved more than 600+ problems based on Data Structures and Algorithms in C++</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <p className="text-[14px] blue-text-gradient hover:scale-110 transition-transform duration-300">#C++</p>
                  <p className="text-[14px] green-text-gradient hover:scale-110 transition-transform duration-300">#DSA</p>
                  <p className="text-[14px] pink-text-gradient hover:scale-110 transition-transform duration-300">#Competitive Programming</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.geeksforgeeks.org/user/3098raksqlv9/" target="_blank" rel="noopener noreferrer">
            <div style={{opacity: 1, transform: 'none'}}>
              <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer animate-fade-in" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', animationDelay: '0.3s'}}>
                <div className="relative w-full h-[230px]">
                  <img src="data:image/png;base64,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" alt="project_image" className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-110" />
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                      <img src="data:image/png;base64,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" alt="source code" className="w-1/2 h-1/2 object-contain" />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-white font-bold text-[24px] hover:text-green-400 transition-colors duration-300">GFG Profile</h3>
                  <p className="mt-2 text-secondary text-[14px]">My GFG profile, where I am praticing my  coding score based on #DSA in C++.</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <p className="text-[14px] blue-text-gradient hover:scale-110 transition-transform duration-300">#C++</p>
                  <p className="text-[14px] green-text-gradient hover:scale-110 transition-transform duration-300">#DSA</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://github.com/ADHIRAHA2208" target="_blank" rel="noopener noreferrer">
            <div style={{opacity: 1, transform: 'none'}}>
              <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer animate-fade-in" style={{transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', animationDelay: '0.5s'}}>
                <div className="relative w-full h-[230px]">
                  <img src="data:image/png;base64,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" alt="project_image" className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-110" />
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-white hover:bg-opacity-20 transition-all duration-300">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABDUlEQVR4nOXXPyuFcRjG8cef/Fscg4HhTAzKYKBYLVZWf17BEW/BW6BMdosBb0BGkww2BilSFhmUwkdPPXWcwfpcyrX8xvtb9/277usuil+EOdxhoUgIAzjFG5ZTED3Yxwc2IxClsI1P7KK7SAjreMdR2Z4UxCJecIZGCmIa97hGMwUxjis8YiYF0cA5XrGUgujDYTWcaymILuzgq3wjEKWwVXnFAXqLhLBSWfcJhlIQ83jGBUZTEBO4wS0mUxBjuMRTxLAkATBVhZn6WyA5hNrf8BiDKSPaK5PU/7Bi9P9YRqt1Fx+JrWPtQPJQeyCRjGQ6Q+lw3cU3YrFc6jDReZq1aitc/IXjFLN1nOffkIi3Oj7ybK8AAAAASUVORK5CYII=" alt="source code" className="w-1/2 h-1/2 object-contain" />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-white font-bold text-[24px] hover:text-purple-400 transition-colors duration-300">Github Profile</h3>
                  <p className="mt-2 text-secondary text-[14px]">My GitHub profile, where I store all my codes of the projects.</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <p className="text-[14px] blue-text-gradient hover:scale-110 transition-transform duration-300">#C++</p>
                  <p className="text-[14px] green-text-gradient hover:scale-110 transition-transform duration-300">nodejs</p>
                  <p className="text-[14px] pink-text-gradient hover:scale-110 transition-transform duration-300">#HTML-CSS-JavaScript</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>







      {/* Section 7: Contact Me */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center p-8">
        <div className="text-center animate-bounce-in">
          <h2 className="text-4xl font-bold text-white mb-6">Contact Me</h2>
          <p className="text-lg text-gray-300 mb-8">Ready to launch your next project? Let's connect and explore the possibilities!</p>
          <div className="max-w-4xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg border-2 border-blue-500">
              <h3 className="text-2xl font-semibold text-white mb-4">Send a Message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const name = e.target.name.value
                  const email = e.target.email.value
                  const message = e.target.message.value
                  const subject = `Message from ${name}`
                  const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`
                  window.location.href = `mailto:rakshada.tawade@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-400 focus:outline-none resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
         
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-8">
        <p>&copy; 2025 Rakshada Tawade.</p>
        <div className="mt-2 flex justify-center space-x-2">
          <span className="text-blue-400">🚀</span>
          <span className="text-yellow-400">⭐</span>
          <span className="text-blue-400">🚀</span>
        </div>
      </footer>
    </div>
  )
}

export default UI
