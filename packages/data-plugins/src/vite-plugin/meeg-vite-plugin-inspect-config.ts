import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@meeg/vite-plugin-inspect-config',
  description: 'Write the resolved Vite config to disk for easy inspection when developing Vite plugins.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'debug',
    'config',
  ],
  links: {
    github: 'https://github.com/CMeeg/vite-plugin-inspect-config',
    npm: 'https://www.npmjs.com/package/@meeg/vite-plugin-inspect-config',
    website: 'https://github.com/CMeeg/vite-plugin-inspect-config#readme',
  },
  source: {
    github: 'CMeeg/vite-plugin-inspect-config',
    npm: '@meeg/vite-plugin-inspect-config',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 37,
      weekly: 9,
    },
  },
})
