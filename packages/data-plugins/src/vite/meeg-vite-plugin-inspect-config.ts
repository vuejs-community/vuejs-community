import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@meeg/vite-plugin-inspect-config',
  description: 'Write the resolved Vite config to disk for easy inspection when developing Vite plugins.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'debug',
    'config',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/CMeeg/vite-plugin-inspect-config',
    npm: 'https://www.npmjs.com/package/@meeg/vite-plugin-inspect-config',
  },
  stats: {
    downloads: {
      monthly: 237,
      weekly: 12,
    },
  },
})
