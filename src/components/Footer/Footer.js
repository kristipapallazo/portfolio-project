import classes from "./Footer.module.css";
import { LINK_ICONS } from "../../assets/icons/index";

const INITIAL_LINK = [
  {
    id: "email",
    label: "Email",
    href: "mailto:papallazo.dev@gmail.com",
  },
  {
    id: "phone",
    label: "Phone",
    href: "tel:+355693259359",
    target: "_target",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kristi-papallazo/",
  },
  {
    id: "gh",
    label: "GitHub",
    href: "https://github.com/kristipapallazo",
  },
  {
    id: "gl",
    label: "GitLab",
    href: "https://gitlab.com/kristipapallazo",
  },
];

const Footer = () => {
  const items = INITIAL_LINK.map(({ id, label, href, target = "_blank" }) => {
    const icon = LINK_ICONS[id];
    return (
      <a href={href} className={classes.link} key={id} target={target}>
        {icon && <i className={classes["icon-container"]}>{icon}</i>}
        <span className={classes.label}>{label}</span>
      </a>
    );
  });
  return (
    <section id="contact" className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Contact Me</h2>
        <div className={classes.links}>{items}</div>
        <p className={classes.desc}>
          Feel free to reach out to me via email or phone. You can also connect
          with me on LinkedIn or GitHub.
        </p>
      </div>
    </section>
  );
};

export default Footer;
