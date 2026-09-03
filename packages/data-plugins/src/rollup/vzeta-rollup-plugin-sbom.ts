import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vzeta/rollup-plugin-sbom',
  description: 'A rollup and vite plugin to generate SBOMs for your application',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'sbom',
    'cyclonedx',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/janbiasi/rollup-plugin-sbom',
    npm: 'https://www.npmjs.com/package/@vzeta/rollup-plugin-sbom',
  },
  stats: {
    downloads: {
      monthly: 5937,
      weekly: 1433,
    },
  },
})
