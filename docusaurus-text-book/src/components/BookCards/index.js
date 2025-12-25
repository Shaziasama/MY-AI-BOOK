import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const CARD_DATA = [
  {
    title: 'Foundations of Embodied AI',
    color: '#FF9F1C', // Orange
  },
  {
    title: 'Humanoid Kinematics & Dynamics',
    color: '#2EC4B6', // Turquoise
  },
  {
    title: 'Perception and Sensing',
    color: '#E71D36', // Red
  },
  {
    title: 'Control and Navigation',
    color: '#FFBF69', // Peach
  },
  {
    title: 'Human-Robot Interaction',
    color: '#3A86FF', // Blue
  },
  {
    title: 'Ethical AI & Robotics',
    color: '#8338EC', // Purple
  },
];

function Card({ title, color }) {
  return (
    <div className={clsx('card', styles.bookCard)} style={{ backgroundColor: color }}>
      <div className="card__header">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function BookCards() {
  return (
    <section className={clsx('margin-top--lg margin-bottom--lg', styles.bookCardsSection)}>
      <div className="container">
        <h2 className="text--center margin-bottom--lg">What You'll Learn</h2>
        <div className={clsx('row', styles.cardGrid)}>
          {CARD_DATA.map((props, idx) => (
            <div key={idx} className={clsx('col col--4 margin-bottom--lg', styles.cardWrapper)}>
              <Card {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
