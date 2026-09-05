import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'element-plus',
  description: 'A Vue 3 based component library for designers and developers',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/element-plus/element-plus-nuxt',
    npm: 'https://npmjs.com/package/@element-plus/nuxt',
    website: 'https://element-plus.org',
  },
  source: {
    github: 'element-plus/element-plus-nuxt',
    npm: '@element-plus/nuxt',
  },
  stats: {
    stars: 175,
    downloads: {
      monthly: 73462,
      weekly: 18391,
    },
  },
})
