import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'shadcn',
  description: 'Re-usable components built with Radix Vue and Tailwind CSS.',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/unovue/shadcn-vue',
    npm: 'https://npmjs.com/package/shadcn-nuxt',
    website: 'https://www.shadcn-vue.com',
  },
  source: {
    github: 'unovue/shadcn-vue#dev/packages/module',
    npm: 'shadcn-nuxt',
  },
  stats: {
    stars: 10548,
    downloads: {
      monthly: 372900,
      weekly: 106833,
    },
  },
})
