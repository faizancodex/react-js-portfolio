export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Faizan Khan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Python Developer
          </h1>
          <p className="hero--section-description">
            Passionate about building scalable web applications and solve real-world problems.
            Always eager to learn and innovate!
          </p>
        </div>
        <button
          onClick={() => document.getElementById("first-name").focus()}sts
          className="btn contact-btn btn-primary"
        >
          Get In Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/home-right.png" alt="Hero Section" />
      </div>
    </section>
  );
}
