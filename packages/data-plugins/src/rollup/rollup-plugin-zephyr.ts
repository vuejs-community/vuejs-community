import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-zephyr',
  description: 'Rollup plugin for Zephyr',
  icon: 'logos:rollupjs',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'deploy',
    'rollup',
    'rollup-plugin',
    'zephyr',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'ZephyrCloudIO/zephyr-packages',
    npm: 'rollup-plugin-zephyr',
  },
  links: {
    github: 'https://github.com/ZephyrCloudIO/zephyr-packages',
    npm: 'https://www.npmjs.com/package/rollup-plugin-zephyr',
  },
  stats: {
    downloads: {
      monthly: 1183,
      weekly: 203,
    },
  },
})
