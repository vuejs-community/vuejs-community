import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@alwaysmeticulous/recorder-plugin',
  description: 'Meticulous plugin for Vite, Webpack, Rspack, Rsbuild, and Nuxt that injects the recorder script into the HTML head, plus a Vite plugin that emits CSS source maps for stylesheet coverage.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'meticulous',
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'rsbuild',
    'nuxt',
  ],
  source: {
    github: 'alwaysmeticulous/meticulous-sdk',
    npm: '@alwaysmeticulous/recorder-plugin',
  },
  links: {
    github: 'https://github.com/alwaysmeticulous/meticulous-sdk',
    npm: 'https://www.npmjs.com/package/@alwaysmeticulous/recorder-plugin',
    website: 'https://github.com/alwaysmeticulous/meticulous-sdk',
  },
  stats: {
    stars: 28,
    downloads: {
      monthly: 83397,
      weekly: 29561,
    },
  },
})
