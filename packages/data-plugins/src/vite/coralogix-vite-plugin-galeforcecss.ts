import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@coralogix/vite-plugin-galeforcecss',
  description: 'Vite plugin for GaleforceCSS — fast Tailwind CSS v3 compilation with incremental HMR.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'tailwind',
    'tailwindcss',
    'vite',
    'vite-plugin',
    'css',
    'rust',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/coralogix/galeforce-css',
    npm: 'https://www.npmjs.com/package/@coralogix/vite-plugin-galeforcecss',
  },
  stats: {
    downloads: {
      monthly: 6296,
      weekly: 1874,
    },
  },
})
