import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vinext-zephyr',
  description: 'Vite plugin for deploying Vinext applications with Zephyr',
  icon: 'logos:vite-icon',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'deploy',
    'vinext',
    'vite',
    'vite-plugin',
    'zephyr',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'ZephyrCloudIO/zephyr-packages',
    npm: 'vite-plugin-vinext-zephyr',
  },
  links: {
    github: 'https://github.com/ZephyrCloudIO/zephyr-packages',
    npm: 'https://www.npmjs.com/package/vite-plugin-vinext-zephyr',
  },
  stats: {
    downloads: {
      monthly: 1141,
      weekly: 75,
    },
  },
})
