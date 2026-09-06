import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-phpsandbox',
  description: 'Vite plugin for PHP sandbox environments that need stable HMR over public proxy hosts.',
  icon: '',
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
