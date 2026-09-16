import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-better-console',
  description: 'Zero-dependency Vite plugin for beautiful dev-only console logging. Grouped output, caller detection, log levels, TypeScript support — silent in production.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    npm: 'vite-plugin-better-console',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-better-console',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
