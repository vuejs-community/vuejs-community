import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-zephyr',
  description: 'Vite plugin for Zephyr',
  icon: 'logos:vite-icon',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'deploy',
    'module-federation',
    'vite',
    'vite-plugin',
    'zephyr',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'ZephyrCloudIO/zephyr-packages',
    npm: 'vite-plugin-zephyr',
  },
  links: {
    github: 'https://github.com/ZephyrCloudIO/zephyr-packages',
    npm: 'https://www.npmjs.com/package/vite-plugin-zephyr',
  },
  stats: {
    downloads: {
      monthly: 4200,
      weekly: 664,
    },
  },
})
