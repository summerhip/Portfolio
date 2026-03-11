import { useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Immediately show hero animations
    const heroElements = document.querySelectorAll(".hero .fade-in");
    heroElements.forEach((el) => {
      setTimeout(() => el.classList.add("visible"), 100);
    });

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    // Observe all animated elements (excluding hero which animates immediately)
    const animatedElements = document.querySelectorAll(
      ".section .fade-in, .section .slide-up, .section .scale-in, .section-title",
    );
    animatedElements.forEach((el) => observerRef.current.observe(el));

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".parallax");
      parallaxElements.forEach((el) => {
        const speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="portfolio">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">SS</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content parallax" data-speed="0.3">
          <h1 className="hero-title fade-in">Summer Shipp</h1>
          <p className="hero-subtitle fade-in">Software Engineer</p>
          <p className="hero-tagline fade-in">
            Crafting elegant solutions for complex problems
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title fade-in">About Me</h2>
          <p className="about-text slide-up">
            Hello! I'm Summer Shipp, a passionate software engineer with
            experience in building modern web applications. I enjoy combining my
            technical back-end skills with my creative front-end skills to
            create beautiful, user-friendly interfaces.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="section-title fade-in">Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category scale-in">
              <div className="skill-icon">💻</div>
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div className="skill-category scale-in">
              <div className="skill-icon">⚙️</div>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>C/C++</li>
                <li>REST APIs</li>
                <li>Database Design</li>
              </ul>
            </div>
            <div className="skill-category scale-in">
              <div className="skill-icon">🛠️</div>
              <h3>Tools</h3>
              <ul>
                <li>Git</li>
                <li>VS Code</li>
                <li>Command Line</li>
                <li>Github Copilot</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience">
        <div className="container">
          <h2 className="section-title fade-in">Experience</h2>
          <div className="timeline">
            <div className="timeline-item slide-up">
              <div className="timeline-date">2024 - Present</div>
              <div className="timeline-content">
                <h3>Sr Associate Software Developer</h3>
                <h4>SAS • Remote</h4>
                <p>Health and life sciences</p>
                <ul>
                  <li>
                    Design and develop both React applications and Java based
                    mid-tiers and services that communicate with, and take
                    advantage of, SAS analytics
                  </li>
                  <li>
                    Write new and revised UI / server-side application code
                  </li>
                  <li>
                    Perform development-level testing and writing unit tests
                  </li>
                </ul>
                <div className="timeline-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Jest</span>
                  <span>Playwright</span>
                </div>
              </div>
            </div>
            <div className="timeline-item timeline-item-promoted slide-up">
              <div className="timeline-date">2022 - 2024</div>
              <div className="timeline-content">
                <div className="promotion-badge">↑ Promoted</div>
                <h3>Associate Software Developer</h3>
                <h4>SAS • Remote</h4>
              </div>
            </div>
            <div className="timeline-item slide-up">
              <div className="timeline-date">Summer 2022</div>
              <div className="timeline-content">
                <h3>Intern</h3>
                <h4>Intact Technology • Reston, VA</h4>
                <ul>
                  <li>
                    Developed and configured application dashboards in
                    ServiceNow using HTML and JavaScript
                  </li>
                  <li>
                    Assisted with Learning and Development platform UI design
                    using GoMo and Bridge LMS
                  </li>
                </ul>
                <div className="timeline-tags">
                  <span>HTML</span>
                  <span>Javascript</span>
                </div>
              </div>
            </div>
            <div className="timeline-item slide-up">
              <div className="timeline-date">2018 - 2020</div>
              <div className="timeline-content">
                <h3>Math Tutor</h3>
                <h4>George Mason University • Fairfax, VA</h4>
                <ul>
                  <li>
                    Motivated struggling students with effective communication
                    and problem-solving skills to teach complex concepts
                  </li>
                </ul>
                <div className="timeline-tags">
                  <span>Calculus I, II, III</span>
                  <span>Linear Algebra</span>
                  <span>Differential Equations</span>
                  <span>Proofs</span>
                  <span>Statistics</span>
                  <span>Discrete Mathematics</span>
                  <span>Physics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education">
        <div className="container">
          <h2 className="section-title fade-in">Education</h2>
          <div className="education-grid">
            <div className="education-card slide-up">
              <div className="education-icon">🎓</div>
              <h3>
                Bachelor of Science in Computer Science & Minor in Mathematics
              </h3>
              <h4>George Mason University</h4>
              <div className="education-date">2018 - 2021</div>
              <p>
                Relevant coursework: Data Structures, Algorithms, Web
                Development, Database Systems, Software Engineering, Computer
                Architecture, Operating Systems, Calculus I, II, III, Linear
                Algebra, Differential Equations, Proofs, Statistics, Discrete
                Mathematics, Physics I, II
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="section-title fade-in">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card slide-up">
              <div className="project-image">
                <div className="project-placeholder">📦</div>
              </div>
              <h3>Inventory Tracker</h3>
              <p>
                An inventory management system built with React 19 and Vite on
                the frontend, featuring AG Grid for data table visualization and
                a full REST API backend powered by Express.js with SQLite
                (better-sqlite3) for persistent storage. The application
                provides user authentication, full CRUD operations for inventory
                management, sales tracking capabilities, and a multi-view
                dashboard interface (Dashboard, Inventory, Sales views) that can
                be deployed to Railway or GitHub Pages.
              </p>
              <div className="project-links">
                <a
                  href="https://summerhip.github.io/Inventory/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="project-card slide-up">
              <div className="project-image">
                <div className="project-placeholder">❌</div>
              </div>
              <h3>Tic Tac Toe</h3>
              <p>
                This is a simple Tic Tac Toe game built with React 19 and Vite
                7. It features player-vs-player or player-vs-computer modes, a
                unique "reverse mode" where three-in-a-row means you lose,
                custom player names, confetti win animations, and dynamically
                generated arcade-style background music using the Web Audio API.
                The app uses React hooks for state management and is configured
                to deploy to GitHub Pages.
              </p>
              <div className="project-links">
                <a
                  href="https://summerhip.github.io/TicTacToe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="project-card slide-up">
              <div className="project-image">
                <div className="project-placeholder">✨</div>
              </div>
              <h3>Project Three</h3>
              <p>
                Description of your third project. Mention any interesting
                challenges you overcame.
              </p>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title fade-in">Get In Touch</h2>
          <p className="contact-subtitle slide-up">
            I'm always open to discussing new opportunities and projects.
          </p>
          <div className="contact-links slide-up">
            <a href="mailto:summer.shippl@gmail.com" className="contact-link">
              <span>Email</span>
            </a>
            <a
              href="https://github.com/summerhip"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/summerhip/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Summer Shipp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
