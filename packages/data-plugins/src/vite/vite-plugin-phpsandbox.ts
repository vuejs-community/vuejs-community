import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-phpsandbox',
  description: 'Vite plugin for PHP sandbox environments that need stable HMR over public proxy hosts.',
  icon: 'logos:vite-icon',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'phpsandbox',
    'hmr',
    'sandbox',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-phpsandbox',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-phpsandbox',
  },
  stats: {
    downloads: {
      monthly: 158,
      weekly: 64,
    },
  },
})
