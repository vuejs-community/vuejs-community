import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-static-classnames',
  description: 'Vite plugin that collapses class name templates at build time, so wrapped class lists never ship to the browser.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'classnames',
    'tailwind',
    'unocss',
    'cva',
    'build-time',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Gastonite/vite-plugin-static-classnames',
    npm: 'https://www.npmjs.com/package/vite-plugin-static-classnames',
  },
  stats: {
    downloads: {
      monthly: 307,
      weekly: 7,
    },
  },
})
