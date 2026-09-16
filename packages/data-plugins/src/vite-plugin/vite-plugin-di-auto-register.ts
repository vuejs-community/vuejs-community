import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-di-auto-register',
  description: 'Auto-register injection-js dependencies for Vite-based DDD projects. Scans @Injectable() classes and generates a register file at dev/build time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    npm: 'vite-plugin-di-auto-register',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-di-auto-register',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
