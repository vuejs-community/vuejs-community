import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-raw-asset-uprooter',
  description: 'Vite & Rolldown plugin to bypass package.json \'exports\' validation for raw non-ESM scripts and adapt the build manifest for backend frameworks (Twig, Blade, PHP).',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'rolldown',
    'exports',
    'manifest',
    'twig',
    'blade',
    'php',
    'non-esm',
    'legacy',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-raw-asset-uprooter',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-raw-asset-uprooter',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 2,
    },
  },
})
