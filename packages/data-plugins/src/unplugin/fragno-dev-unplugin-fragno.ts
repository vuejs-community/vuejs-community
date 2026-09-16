import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fragno-dev/unplugin-fragno',
  description: 'Code is adopted from [vite-env-only](https://github.com/pcattori/vite-env-only) (MIT License)',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'fragno',
    'unplugin',
  ],
  source: {
    github: 'rejot-dev/fragno',
    npm: '@fragno-dev/unplugin-fragno',
  },
  links: {
    github: 'https://github.com/rejot-dev/fragno',
    npm: 'https://www.npmjs.com/package/@fragno-dev/unplugin-fragno',
    website: 'https://fragno.dev',
  },
  stats: {
    stars: 62,
    downloads: {
      monthly: 266,
      weekly: 3,
    },
  },
})
