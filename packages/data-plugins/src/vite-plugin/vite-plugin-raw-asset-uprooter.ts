import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-raw-asset-uprooter',
  description: 'Vite & Rolldown plugin to bypass package.json \'exports\' validation for raw non-ESM scripts and adapt the build manifest for backend frameworks (Twig, Blade, PHP).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    npm: 'vite-plugin-raw-asset-uprooter',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-raw-asset-uprooter',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 6,
    },
  },
})
