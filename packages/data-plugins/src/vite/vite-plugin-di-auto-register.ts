import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-di-auto-register',
  description: 'Auto-register injection-js dependencies for Vite-based DDD projects. Scans @Injectable() classes and generates a register file at dev/build time.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'di',
    'dependency-injection',
    'injection-js',
    'ddd',
    'auto-register',
    'ioc',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-di-auto-register',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
