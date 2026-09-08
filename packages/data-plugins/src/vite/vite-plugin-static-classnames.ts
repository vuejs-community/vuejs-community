import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-static-classnames',
  description: 'Vite plugin that collapses class name templates at build time, so wrapped class lists never ship to the browser.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'Gastonite/vite-plugin-static-classnames',
    npm: 'vite-plugin-static-classnames',
  },
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
