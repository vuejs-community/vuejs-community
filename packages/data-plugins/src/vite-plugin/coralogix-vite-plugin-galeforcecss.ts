import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@coralogix/vite-plugin-galeforcecss',
  description: 'Vite plugin for GaleforceCSS — fast Tailwind CSS v3 compilation with incremental HMR.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'tailwind',
    'tailwindcss',
    'vite',
    'vite-plugin',
    'css',
    'rust',
    'hmr',
  ],
  source: {
    github: 'coralogix/galeforce-css',
    npm: '@coralogix/vite-plugin-galeforcecss',
  },
  links: {
    github: 'https://github.com/coralogix/galeforce-css',
    npm: 'https://www.npmjs.com/package/@coralogix/vite-plugin-galeforcecss',
    website: 'https://github.com/coralogix/galeforce-css',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 5025,
      weekly: 301,
    },
  },
})
