export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/pic.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <div className="portfolio--container">
            <span className="section-head-button">About</span>
            <h2 className="section--heading">About Me</h2>
          </div>
          <p className="hero--section-description">
            I am eager to apply my expertise in Python development, proficient
            in both frontend and backend technologies. My skill set includes
            Django, Flask, React.js, JavaScript, SQL, MongoDB, and AWS, enabling
            me to build scalable and efficient applications.
          </p>
          <p className="hero--section-description">
            Excited to kickstart my career, I am passionate about contributing
            to real-world projects, collaborating with dynamic teams, and
            continuously enhancing my knowledge. This portfolio showcases my
            ability to develop responsive, user-friendly websites and
            applications. Explore my projects to see how I can bring value to
            your team.
          </p>
        </div>

        <a href="/resume.pdf" download className="btn contact-btn btn-primary">
          Resume
        </a>
      </div>
    </section>
  );
}
