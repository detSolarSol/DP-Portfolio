'use client';

import { useState } from 'react';
import useInView from '@/app/hooks/useInView';
import Carousel from './Carousel';
import Modal from './Modal';
import { projects, Project } from '@/app/data/projects';
import styles from './projects.module.scss';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isVisible } = useInView();

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className={`${styles.projects} ${isVisible ? styles.visible : ''}`}
      ref={ref}
    >
      <h2 className={styles.heading}>Проекты</h2>
      <Carousel projects={projects} onProjectClick={openModal} />
      {selectedProject && <Modal project={selectedProject} onClose={closeModal} />}
    </section>
  );
};

export default Projects;