import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-static-classnames',
  description: 'Vite plugin that collapses class name templates at build time, so wrapped class lists never ship to the browser.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'classnames',
    'tailwind',
    'unocss',
    'cva',
    'build-time',
  ],
  source: {
    github: 'Gastonite/vite-plugin-static-classnames',
    npm: 'vite-plugin-static-classnames',
  },
  links: {
    github: 'https://github.com/Gastonite/vite-plugin-static-classnames',
    npm: 'https://www.npmjs.com/package/vite-plugin-static-classnames',
    website: 'https://github.com/Gastonite/vite-plugin-static-classnames#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 42,
      weekly: 2,
    },
  },
})
