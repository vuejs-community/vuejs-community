import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'shuimo-ui',
  description: 'A Chinese Shuimo style component library.',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/shuimo-design/shuimo-ui',
    npm: 'https://npmjs.com/package/@shuimo-design/shuimo-ui-nuxt',
    website: 'https://shuimo.design',
  },
  source: {
    github: 'shuimo-design/shuimo-ui#main/plugins/nuxt',
    npm: '@shuimo-design/shuimo-ui-nuxt',
  },
  stats: {
    stars: 389,
    downloads: {
      monthly: 76,
      weekly: 15,
    },
  },
})
