import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-require-env-var',
  description: 'Vite.js plugin that makes build fail if a required environment variable(s) is missing',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'Thesoreon/vite-require-environment-variable',
    npm: 'vite-require-env-var',
  },
  links: {
    github: 'https://github.com/Thesoreon/vite-require-environment-variable',
    npm: 'https://www.npmjs.com/package/vite-require-env-var',
    website: 'https://github.com/Thesoreon/vite-require-environment-variable',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 82,
      weekly: 5,
    },
  },
})
