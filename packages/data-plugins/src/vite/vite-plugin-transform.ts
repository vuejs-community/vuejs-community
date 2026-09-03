import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-transform',
  description: 'Vite plugin to handle your resources. For example, to replace occurrences by a regular expression, or resolving paths in cases where the usual tools do not help you, or something else.',
  version: '2.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'replace',
    'transform',
    'resolve',
    'bundle',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Silksofthesoul/vite-plugin-transform',
    npm: 'https://www.npmjs.com/package/vite-plugin-transform',
  },
  stats: {
    downloads: {
      monthly: 8662,
      weekly: 2527,
    },
  },
})
