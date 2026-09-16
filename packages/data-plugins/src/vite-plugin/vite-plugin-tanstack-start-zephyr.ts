import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tanstack-start-zephyr',
  description: 'Vite plugin for Zephyr with TanStack Start support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'deploy',
    'tanstack-start',
    'vite',
    'vite-plugin',
    'zephyr',
  ],
  source: {
    github: 'ZephyrCloudIO/zephyr-packages',
    npm: 'vite-plugin-tanstack-start-zephyr',
  },
  links: {
    github: 'https://github.com/ZephyrCloudIO/zephyr-packages',
    npm: 'https://www.npmjs.com/package/vite-plugin-tanstack-start-zephyr',
    website: 'https://github.com/ZephyrCloudIO/zephyr-packages#readme',
  },
  stats: {
    stars: 21,
    downloads: {
      monthly: 1149,
      weekly: 53,
    },
  },
})
