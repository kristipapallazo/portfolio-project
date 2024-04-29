import classes from "./Navbar.module.css";

const ITEMS = [
  { id: "welocome", label: "Welocome" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
const Navbar = () => {
  const items = ITEMS.map(({ id, label }) => {
    const idLabel = `#${id}`;
    return (
      <li class={classes["nav-link"]} key={id}>
        <a href={idLabel}>{label}</a>
      </li>
    );
  });
  return (
    <nav className={classes.nav}>
      <p class={classes.logo}>My Portfolio</p>
      <ul class={classes["nav-links"]}>{items}</ul>
    </nav>
  );
};

export default Navbar;
