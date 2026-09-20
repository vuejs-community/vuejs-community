import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-transform',
  description: 'Vite plugin to handle your resources. For example, to replace occurrences by a regular expression, or resolving paths in cases where the usual tools do not help you, or something else.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'replace',
    'transform',
    'resolve',
    'bundle',
  ],
  links: {
    github: 'https://github.com/Silksofthesoul/vite-plugin-transform',
    npm: 'https://www.npmjs.com/package/vite-plugin-transform',
    website: 'https://github.com/Silksofthesoul/vite-plugin-transform#readme',
  },
  source: {
    github: 'Silksofthesoul/vite-plugin-transform',
    npm: 'vite-plugin-transform',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 7109,
      weekly: 1313,
    },
  },
})
