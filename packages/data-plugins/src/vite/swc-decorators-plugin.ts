import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'swc-decorators-plugin',
  description: 'Vite plugin that uses SWC only for modules containing standard decorators',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'swc',
    'decorators',
    'standard-decorators',
    'stage-3-decorators',
    'typescript',
    'javascript',
    'class-fields',
    'rolldown',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/js2me/swc-decorators-plugin',
    npm: 'https://www.npmjs.com/package/swc-decorators-plugin',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
