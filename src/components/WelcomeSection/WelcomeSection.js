import classes from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <section id="welcome" className={classes.welcome}>
      <p className={classes.title}>Welcome to My Portfolio</p>
      <p className={classes.desc}>
        I'm Kristi, a passionate full-stack developer dedicated to crafting
        innovative web solutions. With expertise in both front-end and back-end
        technologies, I create seamless user experiences coupled with robust
        functionality.
      </p>
      <p>Explore my projects below and feel free to get in touch!</p>
    </section>
  );
};

export default WelcomeSection;
