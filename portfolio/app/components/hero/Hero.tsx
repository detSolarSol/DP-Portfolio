import styles from './hero.module.scss';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.name}>Плахин Данила</h1>
      <p className={styles.title}>Frontend-разработчик</p>
      <p className={styles.tagline}>Превращаю макеты в живые интерфейсы</p>
      <div className={styles.buttons}>
        <a href="#projects" className={styles.btn}>Проекты</a>
        <a href="#contacts" className={styles.btnOutline}>Контакты</a>
      </div>
    </section>
  );
};

export default Hero;