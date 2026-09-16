import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dtsbom',
  description: 'Vite plugin for generating SBOM (Software Bill of Materials) in SPDX and CycloneDX formats',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'TimurZheksimbaev/vite-plugin-dtsbom',
    npm: 'vite-plugin-dtsbom',
  },
  links: {
    github: 'https://github.com/TimurZheksimbaev/vite-plugin-dtsbom',
    npm: 'https://www.npmjs.com/package/vite-plugin-dtsbom',
    website: 'https://github.com/TimurZheksimbaev/vite-plugin-dtsbom#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 182,
      weekly: 26,
    },
  },
})
