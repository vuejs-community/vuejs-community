import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-remote-assets',
  description: 'Remote Assets plugin for Vite, Rollup and more. Bundle remote assets like images, fonts, and more.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'vite-plugin',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/ariesclark/unplugin-remote-assets',
    npm: 'https://www.npmjs.com/package/unplugin-remote-assets',
    website: 'https://github.com/ariesclark/unplugin-remote-assets#readme',
  },
  source: {
    github: 'ariesclark/unplugin-remote-assets',
    npm: 'unplugin-remote-assets',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1499,
      weekly: 243,
    },
  },
})
