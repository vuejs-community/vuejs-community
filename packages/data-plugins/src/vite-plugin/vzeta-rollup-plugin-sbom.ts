import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vzeta/rollup-plugin-sbom',
  description: 'A rollup and vite plugin to generate SBOMs for your application',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'sbom',
    'cyclonedx',
  ],
  links: {
    github: 'https://github.com/janbiasi/rollup-plugin-sbom',
    npm: 'https://www.npmjs.com/package/@vzeta/rollup-plugin-sbom',
    website: 'https://github.com/janbiasi/rollup-plugin-sbom#readme',
  },
  source: {
    github: 'janbiasi/rollup-plugin-sbom',
    npm: '@vzeta/rollup-plugin-sbom',
  },
  stats: {
    stars: 25,
    downloads: {
      monthly: 5056,
      weekly: 927,
    },
  },
})
