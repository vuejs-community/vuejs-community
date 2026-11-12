import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zephyr',
  description: 'Vite plugin for Zephyr',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'deploy',
    'module-federation',
    'vite',
    'vite-plugin',
    'zephyr',
  ],
  links: {
    github: 'https://github.com/ZephyrCloudIO/zephyr-packages',
    npm: 'https://www.npmjs.com/package/vite-plugin-zephyr',
    website: 'https://github.com/ZephyrCloudIO/zephyr-packages#readme',
  },
  source: {
    github: 'ZephyrCloudIO/zephyr-packages',
    npm: 'vite-plugin-zephyr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 3665,
      weekly: 591,
    },
  },
})
