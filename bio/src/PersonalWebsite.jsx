import './PersonalWebsite.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function PersonalWebsite() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="/logo.jpg" alt="Logo" style={{ height: '38px', marginRight: '12px', verticalAlign: 'middle', borderRadius: '8px' }} />
          Facetrack
        </div>
        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

// Home Component
function Home() {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home-content">
          <h1>Hello, I'm <span>Jayson</span></h1>
          <div className="text-animate"><h3>IT Manager / Student</h3></div>
          <p>an IT Consultant by profession and a part time Student</p>
          <div className="btn-box">
            <a href="#contact" className="btn">Contact Me</a>
            <a href="#about" className="btn">Learn More</a>
          </div>
          <div className="home-sci">
            <a href="https://www.linkedin.com/in/jayson-matito-95000bb2/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/JayMatt21" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Component
function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="heading">About <span>Me</span></h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="about-img">
            <img src="/bio.jpg" alt="profile" style={{ width: '190px', height: '190px', objectFit: 'cover', borderRadius: '50%' }} />
            <span className="circle-spin"></span>
          </div>
          <div className="about-content">
            <h3>Working Student at NU-Dasma</h3>
            <p>Currently working in an International IT Company as Manager / Consultant</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Education Component
function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="heading">My <span>Education</span></h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Bachelor's Degree</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="year">2022 - Present</div>
                <h3>NU-Dasma - Information Technology Major in Mobile and Web Application</h3>
                <p>Learning to build Web and Mobile application</p>
              </div>
            </div>
          </div>
          <div className="education-column">
            <h3 className="title">Bachelor's Degree</h3>
            <div className="education-box">
              <div className="education-content">
                <div className="year">2002 - 2005</div>
                <h3>City College of Manila - BS Computer Science</h3>
                <p>Completed 3 years before shifting to IT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Component
function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="heading">My <span>Skills</span></h2>
        <div className="skills-row">
          <div className="skills-column">
            <h3 className="title">Development</h3>
            <div className="skills-content">
              <div className="progress"><h3>React <span>80%</span></h3></div>
              <div className="progress"><h3>Flutter <span>75%</span></h3></div>
              {/* Add more skills as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Component
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="heading">Contact <span>Me</span></h2>
        <form>
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="input-field">
              <input type="email" placeholder="Email Address" required />
            </div>
          </div>
          <div className="textarea-field">
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} jayson.matito. All rights reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#home">
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
      </div>
    </footer>
  );
}
