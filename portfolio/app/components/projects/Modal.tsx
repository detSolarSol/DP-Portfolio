'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '@/app/data/projects';
import styles from './Modal.module.scss';

interface ModalProps {
  project: Project;
  onClose: () => void;
}

const Modal = ({ project, onClose }: ModalProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  useEffect(() => {
    setCurrentImage(0);
  }, [project.id]);

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImage(prev => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  const hasScreenshots = project.screenshots.length > 0;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Закрыть">
          ×
        </button>

        <div className={styles.gallery}>
          {hasScreenshots ? (
            <>
              <img
                src={project.screenshots[currentImage]}
                alt={`${project.title} — скриншот ${currentImage + 1}`}
                className={styles.image}
              />

              {project.screenshots.length > 1 && (
                <>
                  <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prevImage} aria-label="Предыдущее изображение">‹</button>
                  <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={nextImage} aria-label="Следующее изображение">›</button>
                  <div className={styles.counter}>{currentImage + 1} / {project.screenshots.length}</div>
                </>
              )}
            </>
          ) : (
            <div className={styles.placeholder}>
              <span>{project.title}</span>
            </div>
          )}
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.detailedDescription}</p>
          <div className={styles.tags}>
            {project.technologies.map(tech => (
              <span key={tech} className={styles.tag}>{tech}</span>
            ))}
          </div>
            {project.linkType === 'live' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.button}>
                Открыть проект
              </a>
            )}
            {project.linkType === 'figma' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.button}>
                Прототип в Figma
              </a>
            )}
            {project.linkType === 'planned' && (
              <span className={styles.plannedBadge}>В планах</span>
            )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;