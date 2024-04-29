import classes from "./Projects.module.css";
import clockImg from "../../assets/images/frontend-development/25-clock-sc.png";
import drumImg from "../../assets/images/frontend-development/drum-machine-sc.png";
import markdownImg from "../../assets/images/frontend-development/markdown-previewer-sc.png";
import randomImg from "../../assets/images/frontend-development/random-page-sc.png";
import productImg from "../../assets/images/responsive-web-design/product-landing-page-sc.png";
import survaryImg from "../../assets/images/responsive-web-design/survay-page-sc.png";
import docImg from "../../assets/images/responsive-web-design/technical-documentation-page-sc.png";
import tributeImg from "../../assets/images/responsive-web-design/tribute-page-sc.png";

const INITIAL_ITEMS = [
  {
    id: "0",
    label: "Random quotes",
    url: "https://pyfvzm.csb.app/",
    img: randomImg,
  },
  {
    id: "1",
    label: "Drum machine",
    url: "https://w6yf4k-3000.csb.app/",
    img: drumImg,
  },
  {
    id: "2",
    label: "25 + 5 Clock",
    url: "https://4mlgp2-3000.csb.app/",
    img: clockImg,
  },
  {
    id: "3",
    label: "Markdown previewer",
    url: "https://hr8mhh.csb.app/",
    img: markdownImg,
  },
  {
    id: "4",
    label: "Documentation page",
    url: "https://qjq44g.csb.app",
    img: docImg,
  },
  {
    id: "5",
    label: "Tribute page",
    url: "https://9r3jzc.csb.app",
    img: tributeImg,
  },
  {
    id: "6",
    label: "Survay page",
    url: "https://khl8lm.csb.app",
    img: survaryImg,
  },
  {
    id: "7",
    label: "Product landing page",
    url: "https://jmhc9t.csb.app",
    img: productImg,
  },
];
const Projects = () => {
  const items = INITIAL_ITEMS.map(({ id, label, url, target, img }) => {
    return (
      <div className={classes.project} key={id}>
        <a href={url} target={target} className={classes.link}>
          <img src={img} alt={label} className={classes.img} />
          <div className={classes.card}>
            <h2>{label}</h2>
          </div>
        </a>
      </div>
    );
  });
  return (
    <section id="projects" className={classes.container}>
      {items}
    </section>
  );
};

export default Projects;
