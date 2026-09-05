import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-raw-asset-uprooter',
  description: 'Vite & Rolldown plugin to bypass package.json \'exports\' validation for raw non-ESM scripts and adapt the build manifest for backend frameworks (Twig, Blade, PHP).',
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
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-raw-asset-uprooter',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 4,
    },
  },
})
