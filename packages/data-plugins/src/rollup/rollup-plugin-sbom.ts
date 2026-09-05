import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sbom',
  description: 'A rollup, rolldown and vite plugin to generate SBOMs for your application',
  version: '4.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'sbom',
    'cyclonedx',
    'bill-of-materials',
    'bom',
    'software-bill-of-materials',
    'sbom',
    'inventory',
    'dependency',
    'spdx',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/janbiasi/rollup-plugin-sbom',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sbom',
  },
  stats: {
    downloads: {
      monthly: 160772,
      weekly: 43746,
    },
  },
})
