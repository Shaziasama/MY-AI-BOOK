import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  bookSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Modules',
      items: [
        'modules/module1',
        'modules/module2',
        'modules/module3',
        'modules/module4',
      ],
    },
    {
      type: 'category',
      label: 'ROS 2',
      items: [
        'ros2/ros2-introduction',
        'ros2/ros2-nodes-and-topics',
        'ros2/ros2-actions-and-services',
        'ros2/ros2-exercises',
      ],
    },
    {
      type: 'category',
      label: 'Digital Twin',
      items: [
        'digital-twin/gazebo-simulation',
        'digital-twin/unity-integration',
        'digital-twin/digital-twin-exercises',
      ],
    },
    {
      type: 'category',
      label: 'NVIDIA Isaac',
      items: [
        'isaac/isaac-sim-overview',
        'isaac/isaac-robotics-manipulation',
        'isaac/isaac-exercises',
      ],
    },
    {
      type: 'category',
      label: 'VLA (Vision-Language-Action)',
      items: [
        'vla/introduction-to-vla',
        'vla/vla-models-and-applications',
        'vla/vla-exercises',
      ],
    },
    {
      type: 'doc',
      id: 'capstone-project',
      label: 'Capstone Project',
    },
    {
      type: 'doc',
      id: 'additional-resources',
      label: 'Additional Resources',
    },
    // Other miscellaneous docs, I will put them under a general category.
    {
      type: 'category',
      label: 'Technical',
      items: [
        'technical/chatbot-integration',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial Basics',
      items: [
        'tutorial-basics/congratulations',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-page',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/markdown-features',
      ],
    },
    {
      type: 'category',
      label: 'Tutorial Extras',
      items: [
        'tutorial-extras/manage-docs-versions',
        'tutorial-extras/translate-your-site',
      ],
    },
    {
      type: 'doc',
      id: 'test',
      label: 'Test Page',
    },
  ],
};

export default sidebars;