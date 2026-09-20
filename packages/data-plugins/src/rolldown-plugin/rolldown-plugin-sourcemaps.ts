import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-sourcemaps',
  description: 'Rolldown plugin for grabbing source maps from sourceMappingURLs',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'rolldown',
    'rolldown-plugin',
    'sourcemap',
    'source-map',
    'sourceMappingURL',
  ],
  links: {
    github: 'https://github.com/rtvision/rolldown-plugin-sourcemaps',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-sourcemaps',
    website: 'https://github.com/rtvision/rolldown-plugin-sourcemaps#readme',
  },
  source: {
    github: 'rtvision/rolldown-plugin-sourcemaps',
    npm: 'rolldown-plugin-sourcemaps',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1222,
      weekly: 320,
    },
  },
})
