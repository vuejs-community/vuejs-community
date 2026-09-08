import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-remote-assets',
  description: 'Remote Assets plugin for Vite, Rollup and more. Bundle remote assets like images, fonts, and more.',
  icon: 'icon:dark-unplugin',
  version: '0.4.3',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'vite-plugin',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'ariesclark/unplugin-remote-assets',
    npm: 'unplugin-remote-assets',
  },
  links: {
    github: 'https://github.com/ariesclark/unplugin-remote-assets',
    npm: 'https://www.npmjs.com/package/unplugin-remote-assets',
  },
  stats: {
    downloads: {
      monthly: 1019,
      weekly: 701,
    },
  },
})
