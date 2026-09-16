import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gasstack/manifest',
  description: 'Google Apps Script manifest building and configuration utilities.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'gas',
    'google',
    'apps',
    'script',
    'google apps script',
    'manifest',
    'addons',
    'plugin',
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'gasstack/gasstack',
    npm: '@gasstack/manifest',
  },
  links: {
    github: 'https://github.com/gasstack/gasstack',
    npm: 'https://www.npmjs.com/package/@gasstack/manifest',
    website: 'https://github.com/gasstack/gasstack#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
