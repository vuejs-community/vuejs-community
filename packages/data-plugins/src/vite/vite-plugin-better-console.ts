import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-better-console',
  description: 'Zero-dependency Vite plugin for beautiful dev-only console logging. Grouped output, caller detection, log levels, TypeScript support — silent in production.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'console',
    'debug',
    'logger',
    'logging',
    'development',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-better-console',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
