import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import BookCards from '@site/src/components/BookCards'; // Import BookCards component
import Footer from '@site/src/components/Footer'; // Import Footer component

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={styles.readButton}
            to="/docs/intro">
            Start Reading 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="An Interactive Textbook for Building the Next Generation of intelligent Robots.">
      <HomepageHeader />
      <main>
        <section className="padding-vert--xl">
          <div className="container text--center">
            <h2 className="margin-bottom--lg">Welcome to "Physical AI & Humanoid Robotics"</h2>
            <p className="hero__subtitle">
              This interactive textbook provides a comprehensive exploration of Physical AI and Humanoid Robotics,
              blending theoretical foundations with practical applications. Designed for students, researchers,
              and enthusiasts, it delves into the intricacies of designing, building, and programming intelligent
              robots that can interact with the physical world. From the basics of robotic control to advanced
              learning algorithms and ethical considerations, this book equips you with the knowledge and tools
              to contribute to the next generation of intelligent machines.
            </p>
          </div>
        </section>

        <BookCards />
        <Footer />
      </main>
    </Layout>
  );
}
