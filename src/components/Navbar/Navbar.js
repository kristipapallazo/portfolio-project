import classes from "./Navbar.module.css";

const ITEMS = [
  { id: "welcome", label: "Welcome" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
const Navbar = () => {
  const items = ITEMS.map(({ id, label }) => {
    const idLabel = `#${id}`;
    return (
      <li className={classes["nav-link"]} key={id}>
        <a href={idLabel}>{label}</a>
      </li>
    );
  });
  return (
    <nav className={classes.nav}>
      <p className={classes.logo}>My portfolio</p>
      <ul className={classes["nav-links"]}>{items}</ul>
    </nav>
  );
};

export default Navbar;
