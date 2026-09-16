import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'csproj-version',
  description: 'versioning .csproj files in projects under a .NET solution',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'filesizes',
  ],
  source: {
    github: 'hoyeungw/csproj-version',
    npm: 'csproj-version',
  },
  links: {
    github: 'https://github.com/hoyeungw/csproj-version',
    npm: 'https://www.npmjs.com/package/csproj-version',
    website: 'https://github.com/hoyeungw/csproj-version#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 67,
      weekly: 16,
    },
  },
})
