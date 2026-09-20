import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'swc-decorators-plugin',
  description: 'Vite plugin that uses SWC only for modules containing standard decorators',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/js2me/swc-decorators-plugin',
    npm: 'https://www.npmjs.com/package/swc-decorators-plugin',
    website: 'https://github.com/js2me/swc-decorators-plugin#readme',
  },
  source: {
    github: 'js2me/swc-decorators-plugin',
    npm: 'swc-decorators-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 10,
    },
  },
})
