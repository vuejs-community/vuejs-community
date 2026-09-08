import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-macro',
  description: 'Brings macro capabilities to Vite based projects.',
  icon: 'logos:vite-icon',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'macro',
    'vite',
    'plugin',
    'babel',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'viteland/vite-plugin-macro',
    npm: 'vite-plugin-macro',
  },
  links: {
    github: 'https://github.com/viteland/vite-plugin-macro',
    npm: 'https://www.npmjs.com/package/vite-plugin-macro',
  },
  stats: {
    downloads: {
      monthly: 387,
      weekly: 85,
    },
  },
})
