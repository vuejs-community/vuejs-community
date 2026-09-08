import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-sourcemaps',
  description: 'Rolldown plugin for grabbing source maps from sourceMappingURLs',
  icon: 'logos:rolldown-icon',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'rolldown',
    'rolldown-plugin',
    'sourcemap',
    'source-map',
    'sourceMappingURL',
  ],
  types: [
    'rolldown-plugin',
  ],
  source: {
    github: 'rtvision/rolldown-plugin-sourcemaps',
    npm: 'rolldown-plugin-sourcemaps',
  },
  links: {
    github: 'https://github.com/rtvision/rolldown-plugin-sourcemaps',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-sourcemaps',
  },
  stats: {
    downloads: {
      monthly: 1134,
      weekly: 331,
    },
  },
})
