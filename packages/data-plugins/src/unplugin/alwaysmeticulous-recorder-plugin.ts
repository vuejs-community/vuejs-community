import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@alwaysmeticulous/recorder-plugin',
  description: 'Meticulous recorder plugin for Vite, Webpack, Rspack, Rsbuild, and Nuxt that injects the recorder script into the HTML head.',
  version: '2.333.1',
  category: 'plugin',
  tags: [
    'meticulous',
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'rsbuild',
    'nuxt',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/alwaysmeticulous/meticulous-sdk',
    npm: 'https://www.npmjs.com/package/@alwaysmeticulous/recorder-plugin',
  },
  stats: {
    downloads: {
      monthly: 53820,
      weekly: 20723,
    },
  },
})
