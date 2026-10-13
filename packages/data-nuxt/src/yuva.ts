import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'yuva',
  description: 'Live chat, documentation page feedback and discussions, newsletter subscribe forms and cookieless analytics from Yuva, the open-source customer inbox.',
  icon: 'icon:yuva',
  category: 'nuxt',
  types: [
    'UI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/productdevbook/yuva',
    npm: 'https://npmjs.com/package/useyuva',
    website: 'https://useyuva.com',
  },
  source: {
    github: 'productdevbook/yuva',
    npm: 'useyuva',
  },
})
