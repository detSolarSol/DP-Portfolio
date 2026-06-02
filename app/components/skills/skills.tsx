'use client';

import useInView from '@/app/hooks/useInView';
import styles from './skills.module.scss';

interface Technology {
  name: string;
  description: string;
  docsUrl: string;
}

const technologies: Technology[] = [
  {
    name: 'Next.js',
    description: 'Фреймворк на основе React для серверного рендеринга и статической генерации.',
    docsUrl: 'https://nextjs.org/docs',
  },
  {
    name: 'TypeScript',
    description: 'Расширение JavaScript со статической типизацией для надёжного кода.',
    docsUrl: 'https://www.typescriptlang.org/docs',
  },
  {
    name: 'React',
    description: 'Библиотека для построения пользовательских интерфейсов и SPA.',
    docsUrl: 'https://react.dev',
  },
  {
    name: 'SCSS',
    description: 'Препроцессор CSS с переменными, вложенностью и миксинами.',
    docsUrl: 'https://sass-lang.com/documentation',
  },
  {
    name: 'Figma',
    description: 'Облачный инструмент для дизайн-макетов и интерактивных прототипов.',
    docsUrl: 'https://help.figma.com',
  },
  {
    name: 'Git',
    description: 'Система контроля версий для отслеживания изменений в коде.',
    docsUrl: 'https://git-scm.com/doc',
  },
];

const Skills = () => {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="skills"
      className={`${styles.skills} ${isVisible ? styles.visible : ''}`}
      ref={ref}
    >
      <h2 className={styles.heading}>Навыки</h2>
      <div className={styles.grid}>
        {technologies.map(tech => (
          <a
            key={tech.name}
            href={tech.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3 className={styles.cardHeading}>{tech.name}</h3>
            <p className={styles.cardText}>{tech.description}</p>
            <span className={styles.cardLink}>Документация →</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;