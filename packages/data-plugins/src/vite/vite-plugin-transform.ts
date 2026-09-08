import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-transform',
  description: 'Vite plugin to handle your resources. For example, to replace occurrences by a regular expression, or resolving paths in cases where the usual tools do not help you, or something else.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'Silksofthesoul/vite-plugin-transform',
    npm: 'vite-plugin-transform',
  },
  links: {
    github: 'https://github.com/Silksofthesoul/vite-plugin-transform',
    npm: 'https://www.npmjs.com/package/vite-plugin-transform',
  },
  stats: {
    downloads: {
      monthly: 6784,
      weekly: 901,
    },
  },
})
