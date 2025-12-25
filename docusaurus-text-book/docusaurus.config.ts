import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'An Open-Source Textbook for Advanced Robotics and AI',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Shaziasama.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/MY-AI-BOOK/',
  trailingSlash: false, // Added to address Docusaurus warning

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Shaziasama', // Usually your GitHub org/user name.
  projectName: 'MY-AI-BOOK', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Deploy to this branch


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve docs from the root
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Shaziasama/MY-AI-BOOK/tree/main/', // Updated editUrl
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/book-cover.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'bookSidebar', // The ID of the sidebar defined in sidebars.ts
          label: 'Modules',
          position: 'left',
        },
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'light', // Changed to light for a more modern, colorful look
      links: [
        {
          title: 'Book', // Simplified title
          items: [
            {
              label: 'Introduction',
              to: '/intro',
            },
            {
              label: 'Module 1: Foundations',
              to: '/modules/module1',
            },
            {
              label: 'Module 2: Kinematics & Dynamics',
              to: '/modules/module2',
            },
            {
              label: 'Module 3: Perception & Sensing',
              to: '/modules/module3',
            },
            {
              label: 'Module 4: Control & Navigation',
              to: '/modules/module4',
            },
            {
              label: 'Capstone Project',
              to: '/capstone-project',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Shaziasama/MY-AI-BOOK',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shazia Samma. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
