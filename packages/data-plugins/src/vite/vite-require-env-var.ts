import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-require-env-var',
  description: 'Vite.js plugin that makes build fail if a required environment variable(s) is missing',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Thesoreon/vite-require-environment-variable',
    npm: 'https://www.npmjs.com/package/vite-require-env-var',
  },
  stats: {
    downloads: {
      monthly: 115,
      weekly: 25,
    },
  },
})
