import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-check-env',
  description: 'A Vite plugin to check that required environment variables are available at build time. Scans your code for calls to a specified function and ensures the environment variables referenced in those calls are defined.',
  version: '1.2.17',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'environment-variables',
    'env',
    'build-time-validation',
    'development-tools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/iloveitaly/vite-plugin-check-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-check-env',
  },
  stats: {
    downloads: {
      monthly: 632,
      weekly: 74,
    },
  },
})
