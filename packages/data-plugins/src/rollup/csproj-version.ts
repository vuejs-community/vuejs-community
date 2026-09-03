import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'csproj-version',
  description: 'versioning .csproj files in projects under a .NET solution',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'filesizes',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/hoyeungw/csproj-version',
    npm: 'https://www.npmjs.com/package/csproj-version',
  },
  stats: {
    downloads: {
      monthly: 108,
      weekly: 16,
    },
  },
})
