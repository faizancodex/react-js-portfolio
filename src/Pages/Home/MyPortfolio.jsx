import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../data/index.json";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye} from "@fortawesome/free-solid-svg-icons";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <span className="section-head-button">Portfolio</span>
          <h2 className="section--heading">My Creative Works Portfolio</h2>
        </div>
        <div>
          <a
            className="btn btn-github btn-primary"
            href="https://github.com/faizancodex"
            target="blank"
          >
            <FontAwesomeIcon className="github--icon" icon={faGithub} />
            Visit My GitHub
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <div className="portfolio--link--container">
                <a
                  className="text-sm portfolio--link"
                  href={item.gitlinkaddress}
                  target="blank"
                >
                  <FontAwesomeIcon className="portfolio--icon-link" icon={faGithub} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href={item.viewlinkaddress}
                  target="blank"
                  className="text-sm portfolio--link"
                >
                  <FontAwesomeIcon className="portfolio--icon-link" icon={faEye} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio-count-container">
        <div className="portfolio-count">
          <span className="plus-number">20</span>
          <span className="faplus--icon">+</span>
          <div>
            <span className="portfolio--complete-text">Completed Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
