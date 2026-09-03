import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dtsbom',
  description: 'Vite plugin for generating SBOM (Software Bill of Materials) in SPDX and CycloneDX formats',
  version: '1.0.7',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'sbom',
    'spdx',
    'cyclonedx',
    'bom',
    'software-bill-of-materials',
    'security',
    'dependencies',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/TimurZheksimbaev/vite-plugin-dtsbom',
    npm: 'https://www.npmjs.com/package/vite-plugin-dtsbom',
  },
  stats: {
    downloads: {
      monthly: 202,
      weekly: 62,
    },
  },
})
