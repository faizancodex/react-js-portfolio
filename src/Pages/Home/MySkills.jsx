import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <span className="section-head-button">Skills</span>
        <h2 className="section--heading">My Skills</h2>
      </div>

      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img width={75} src={item.src} alt="Product Chain" />
            </div>
            <h3 className="skills--section--title">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
