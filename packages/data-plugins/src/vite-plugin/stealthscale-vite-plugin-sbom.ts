import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stealthscale/vite-plugin-sbom',
  description: 'Writes a CycloneDX bill of materials from the modules a build reached.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cyclonedx',
    'sbom',
    'spdx',
    'supply-chain',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'stealth-scale/config',
    npm: '@stealthscale/vite-plugin-sbom',
  },
  links: {
    github: 'https://github.com/stealth-scale/config',
    npm: 'https://www.npmjs.com/package/@stealthscale/vite-plugin-sbom',
    website: 'https://github.com/stealth-scale/config/tree/main/packages/vite-plugin-sbom#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 217,
      weekly: 217,
    },
  },
})
