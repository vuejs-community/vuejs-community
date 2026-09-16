import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-esm-to-systemjs',
  description: 'Vite plugin that transforms ESM output to SystemJS format using Babel',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'systemjs',
    'esm',
    'babel',
  ],
  source: {
    github: 'AjCu/vite-plugin-esm-to-systemjs',
    npm: 'vite-plugin-esm-to-systemjs',
  },
  links: {
    github: 'https://github.com/AjCu/vite-plugin-esm-to-systemjs',
    npm: 'https://www.npmjs.com/package/vite-plugin-esm-to-systemjs',
    website: 'https://github.com/AjCu/vite-plugin-esm-to-systemjs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 67,
      weekly: 45,
    },
  },
})
