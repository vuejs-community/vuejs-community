import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'start-kit-core',
  description: 'Core build tools, Vite plugins, and CLI for start-kit',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'template',
    'frontend',
    'starter',
    'boilerplate',
    'scss',
    'build-tool',
  ],
  links: {
    github: 'https://github.com/RNKuchin/start-kit',
    npm: 'https://www.npmjs.com/package/start-kit-core',
    website: 'https://github.com/RNKuchin/start-kit#readme',
  },
  source: {
    github: 'RNKuchin/start-kit',
    npm: 'start-kit-core',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 3,
    },
  },
})
