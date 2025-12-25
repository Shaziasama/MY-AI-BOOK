import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';

const ModuleList = [
  {
    title: 'Module 1: Foundations of Embodied AI',
    description: 'Explore the fundamental concepts of embodied intelligence, multi-agent systems, and the role of ROS 2 in advanced robotics.',
    link: '/modules/module1',
    bgColor: 'bg-[#FF9F1C]', // Orange
  },
  {
    title: 'Module 2: Humanoid Robotics Kinematics & Dynamics',
    description: 'Delve into the mathematical principles governing humanoid robot movement, including forward/inverse kinematics and dynamics.',
    link: '/modules/module2',
    bgColor: 'bg-[#2EC4B6]', // Turquoise
  },
  {
    title: 'Module 3: Perception and Sensing for Humanoids',
    description: 'Understand how humanoid robots perceive their environment using various sensors and advanced perception algorithms.',
    link: '/modules/module3',
    bgColor: 'bg-[#E71D36]', // Red
  },
  {
    title: 'Module 4: Control and Navigation in Complex Environments',
    description: 'Learn about control strategies and navigation techniques that enable humanoids to operate autonomously in real-world settings.',
    link: '/modules/module4',
    bgColor: 'bg-[#FFBF69]', // Peach
  },
  {
    title: 'Capstone Project: Autonomous Humanoid System',
    description: 'Integrate learned concepts to build a complete autonomous humanoid robot system, from perception to action.',
    link: '/capstone-project',
    bgColor: 'bg-[#3A86FF]', // Blue
  },
  {
    title: 'Additional Resources', // Added an extra card for 6 cards total
    description: 'Explore supplementary materials, research papers, and external links related to Physical AI and Humanoid Robotics.',
    link: '/additional-resources', // You might need to create this page
    bgColor: 'bg-[#8338EC]', // Purple
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="relative py-20 px-4 text-center bg-gradient-to-br from-[#FF6EC7] to-[#6A82FB] text-white overflow-hidden shadow-lg">
      <div className="container mx-auto relative z-10">
        <Heading as="h1" className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-8 leading-tight">
          {siteConfig.title}
        </Heading>
        <div className="flex justify-center">
          <Link
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-[#FFD700] hover:bg-[#FFC700] transition-all duration-300 ease-in-out shadow-lg transform hover:-translate-y-1"
            to="/intro">
            Start Reading &nbsp;<span role="img" aria-label="book">📚</span>
          </Link>
        </div>
      </div>
      {/* Background gradients for visual flair, image-free */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-10 left-1/4"></div>
        <div className="absolute w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-1/2 right-1/4"></div>
        <div className="absolute w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 bottom-10 left-1/3"></div>
      </div>
    </header>
  );
}

function ModulesSection() {
  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <Heading as="h2" className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Explore the Modules
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ModuleList.map((module, idx) => (
            <Link
              to={module.link}
              key={idx}
              className={clsx(
                "block p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out",
                "transform hover:-translate-y-2",
                module.bgColor, // Apply solid background color directly from Tailwind class
                "text-white no-underline hover:text-white" // Ensure white text for contrast
              )}
            >
              <Heading as="h3" className="text-2xl font-bold mb-4">
                {module.title}
              </Heading>
              <p className="text-base leading-relaxed">
                {module.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <ModulesSection />
      </main>
    </Layout>
  );
}