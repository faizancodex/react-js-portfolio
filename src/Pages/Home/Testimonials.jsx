// import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container">
        <span className="section-head-button">Testimonial</span>
        <h2 className="section--heading">What People Say About Me</h2>
      </div>

      <div className="portfolio--section--container">
        <div className="testimonial--section--card">
          <div className="testimonial--text-container">
            <p className="hero--section-description">
              " Working with developers was a fantastic experience. They
              tackled every challenge with creativity and skill, delivering a
              final product that functions beautifully. No matter how
              complicated the request, they found a solution and made sure
              everything worked perfectly. Very impressed with their
              problem-solving abilities! "
            </p>
            <div className="name--text">
              <span>Josef Sharon</span>
              <span className="data-engineer">Data Engineer</span>
            </div>
          </div>
          <div className="testimonial--image">
            <img src="./img/testimonial.png" alt="tostimail" />
          </div>
        </div>
      </div>
    </section>
  );
}
