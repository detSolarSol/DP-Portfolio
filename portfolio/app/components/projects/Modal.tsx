'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Project } from '@/app/data/projects';
import styles from './Modal.module.scss';

interface ModalProps {
  project: Project;
  onClose: () => void;
}

const Modal = ({ project, onClose }: ModalProps) => {
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

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Закрыть">
          ×
        </button>
        <div className={styles.imagePlaceholder}>
          <span>{project.title[0]}</span>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.detailedDescription}</p>
          <div className={styles.tags}>
            {project.technologies.map(tech => (
              <span key={tech} className={styles.tag}>{tech}</span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            {project.linkType === 'live' ? 'Открыть проект' : 'Прототип в Figma'}
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;