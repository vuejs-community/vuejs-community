import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sbom',
  description: 'A rollup, rolldown and vite plugin to generate SBOMs for your application',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  source: {
    github: 'janbiasi/rollup-plugin-sbom',
    npm: 'rollup-plugin-sbom',
  },
  links: {
    github: 'https://github.com/janbiasi/rollup-plugin-sbom',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sbom',
    website: 'https://github.com/janbiasi/rollup-plugin-sbom#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 150440,
      weekly: 20319,
    },
  },
})
