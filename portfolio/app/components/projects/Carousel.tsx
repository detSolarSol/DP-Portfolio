'use client';

import { useState, useEffect } from 'react';
import { Project } from '@/app/data/projects';
import styles from './Carousel.module.scss';

interface CarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const CARD_WIDTH = 380;
const GAP = 20;
const STEP = CARD_WIDTH + GAP;

// Метки для плейсхолдеров — порядок соответствует порядку проектов
const placeholderLabels = ['Оплата', 'Подпись', 'Погода', 'ToDo'];

const Carousel = ({ projects, onProjectClick }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, projects.length]);

  const getTranslateX = () => {
    if (current <= 2) return 0;
    return -STEP;
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(${getTranslateX()}px)` }}
        >
          {projects.map((project, index) => {
            const isActive = index === current;
            return (
              <div
                key={project.id}
                className={`${styles.card} ${isActive ? styles.active : styles.inactive}`}
                onClick={() => onProjectClick(project)}
              >
                <div className={styles.imagePlaceholder}>
                  <span>{placeholderLabels[index]}</span>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.shortDescription}</p>
                  <div className={styles.tags}>
                    {project.technologies.map(tech => (
                      <span key={tech} className={styles.tag}>{tech}</span>
                    ))}
                  </div>
                  {isActive && (
                    <button className={styles.viewButton}>Посмотреть</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.indicators}>
        {projects.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Проект ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;