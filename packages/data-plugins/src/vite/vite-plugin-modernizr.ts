import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-modernizr',
  description: 'A Vite plugin to generate and use a custom Modernizr build based on a JSON config.',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'modernizr',
    'vite-plugin',
    'custom-modernizr',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'karlvr/vite-plugin-modernizr',
    npm: 'vite-plugin-modernizr',
  },
  links: {
    github: 'https://github.com/karlvr/vite-plugin-modernizr',
    npm: 'https://www.npmjs.com/package/vite-plugin-modernizr',
  },
  stats: {
    downloads: {
      monthly: 477,
      weekly: 135,
    },
  },
})
