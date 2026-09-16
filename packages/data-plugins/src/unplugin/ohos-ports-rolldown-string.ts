import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ohos-ports/rolldown-string',
  description: 'A compatibility layer for magic-string to work with Rolldown and other bundlers.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'rolldown',
    'unplugin',
    'magic-string',
    'rollup',
  ],
  source: {
    github: 'ohos-ports/ohos-ports',
    npm: '@ohos-ports/rolldown-string',
  },
  links: {
    github: 'https://github.com/ohos-ports/ohos-ports',
    npm: 'https://www.npmjs.com/package/@ohos-ports/rolldown-string',
    website: 'https://github.com/sxzz/rolldown-string#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 80,
      weekly: 80,
    },
  },
})
