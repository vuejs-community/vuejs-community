import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-phpsandbox',
  description: 'Vite plugin for PHP sandbox environments that need stable HMR over public proxy hosts.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'phpsandbox',
    'hmr',
    'sandbox',
  ],
  source: {
    npm: 'vite-plugin-phpsandbox',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-phpsandbox',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 205,
      weekly: 68,
    },
  },
})
