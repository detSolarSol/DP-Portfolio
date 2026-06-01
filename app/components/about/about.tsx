'use client';

import useInView from '@/app/hooks/useInView';
import styles from './About.module.scss';

const About = () => {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="about"
      className={`${styles.about} ${isVisible ? styles.visible : ''}`}
      ref={ref}
    >
      <h2 className={styles.heading}>О себе</h2>
      <div className={styles.grid}>
        <div className={styles.block}>
          <h3 className={styles.subheading}>Образование</h3>
          <p className={styles.text}>
            РТУ МИРЭА, ИПТИП
          </p>
          <p className={styles.text2}>
            Информационные системы и технологии,
            профиль «Компьютерный дизайн»
          </p>
          <p className={styles.year}>Год выпуска: 2026</p>
        </div>
        <div className={styles.block}>
          <h3 className={styles.subheading}>Опыт работы</h3>
          <p className={styles.text}>ООО «Безлимит»</p>
          <p className={styles.text2}>Frontend-разработчик</p>
          <p className={styles.year}>Февраль 2026 – Май 2026</p>
        </div>
        <div className={styles.block}>
          <h3 className={styles.subheading}>Технологический стек</h3>
          <div className={styles.tags}>
            <span className={styles.tag}>Next.js</span>
            <span className={styles.tag}>TypeScript</span>
            <span className={styles.tag}>React</span>
            <span className={styles.tag}>SCSS</span>
            <span className={styles.tag}>CSS Modules</span>
            <span className={styles.tag}>Figma</span>
            <span className={styles.tag}>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;