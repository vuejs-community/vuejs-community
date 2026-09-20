import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-string',
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
  links: {
    github: 'https://github.com/sxzz/rolldown-string',
    npm: 'https://www.npmjs.com/package/rolldown-string',
    website: 'https://github.com/sxzz/rolldown-string#readme',
  },
  source: {
    github: 'sxzz/rolldown-string',
    npm: 'rolldown-string',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 2388063,
      weekly: 609610,
    },
  },
})
