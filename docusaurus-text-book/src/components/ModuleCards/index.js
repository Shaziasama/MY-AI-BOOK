import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css'; // Will create this CSS module

const ModuleCard = ({title, description, imageUrl, link}) => {
  return (
    <Link to={link} className={clsx('card', styles.moduleCard)}>
      <div className="card__header">
        {imageUrl && (
          <div className={styles.moduleImageContainer}>
            <img src={imageUrl} alt={title} className={styles.moduleImage} />
          </div>
        )}
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
    </Link>
  );
};

const MODULES = [
  {
    title: 'Module 1: Foundations of Embodied AI',
    description: 'This module introduces the fundamental concepts of embodied artificial intelligence. We will explore how AI systems can interact with the physical world, the role of sensors and actuators, and the challenges of perception and action in real-world environments.',
    imageUrl: '/img/module1.jpg',
    link: '/docs/modules/module1',
  },
  {
    title: 'Module 2: Humanoid Robotics Kinematics & Dynamics',
    description: 'This module delves into the mathematical principles governing the motion of humanoid robots. We will cover forward and inverse kinematics, which are essential for understanding how a robot\'s joints move its end-effectors, and dynamics, which deals with the forces and torques involved in motion.',
    imageUrl: '/img/module2.jpg',
    link: '/docs/modules/module2',
  },
  {
    title: 'Module 3: Perception and Sensing for Humanoids',
    description: 'This module focuses on how humanoid robots perceive their environment. We will explore various sensing modalities, from vision and depth sensing to touch and proprioception, and how these data are processed to build a coherent understanding of the surrounding world.',
    imageUrl: '/img/module3.jpg',
    link: '/docs/modules/module3',
  },
  {
    title: 'Module 4: Control and Navigation in Complex Environments',
    description: 'In this module, we will examine the advanced control strategies and navigation techniques that enable humanoid robots to operate effectively in dynamic and complex environments. Topics include balance control, gait generation, motion planning, and human-robot interaction.',
    imageUrl: '/img/module4.jpg',
    link: '/docs/modules/module4',
  },
];

export default function ModuleCards() {
  return (
    <section className={styles.modulesSection}>
      <div className="container">
        <div className="row">
          {MODULES.map((props, idx) => (
            <div key={idx} className={clsx('col col--6 margin-bottom--lg')}>
              <ModuleCard {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
