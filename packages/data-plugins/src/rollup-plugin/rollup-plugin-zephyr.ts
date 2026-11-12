import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-zephyr',
  description: 'Rollup plugin for Zephyr',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'deploy',
    'rollup',
    'rollup-plugin',
    'zephyr',
  ],
  links: {
    github: 'https://github.com/ZephyrCloudIO/zephyr-packages',
    npm: 'https://www.npmjs.com/package/rollup-plugin-zephyr',
    website: 'https://github.com/ZephyrCloudIO/zephyr-packages#readme',
  },
  source: {
    github: 'ZephyrCloudIO/zephyr-packages',
    npm: 'rollup-plugin-zephyr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1201,
      weekly: 116,
    },
  },
})
