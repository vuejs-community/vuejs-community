import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-check-env',
  description: 'A Vite plugin to check that required environment variables are available at build time. Scans your code for calls to a specified function and ensures the environment variables referenced in those calls are defined.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'environment-variables',
    'env',
    'build-time-validation',
    'development-tools',
  ],
  links: {
    github: 'https://github.com/iloveitaly/vite-plugin-check-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-check-env',
    website: 'https://github.com/iloveitaly/vite-plugin-check-env#readme',
  },
  source: {
    github: 'iloveitaly/vite-plugin-check-env',
    npm: 'vite-plugin-check-env',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 287,
      weekly: 20,
    },
  },
})
