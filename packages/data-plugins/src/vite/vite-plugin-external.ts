import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-external',
  description: 'Excludes specified module dependencies from runtime code and built bundles.',
  version: '8.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-external',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-external',
  },
  stats: {
    downloads: {
      monthly: 58987,
      weekly: 15702,
    },
  },
})
