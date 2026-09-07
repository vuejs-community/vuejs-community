import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'pdfeasy',
  description: 'A JavaScript Client/Server Side PDF-Generator based in PDFKit',
  icon: '',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/betterwrite/pdfeasy',
    npm: 'https://npmjs.com/package/nuxt-pdfeasy',
    website: 'https://github.com/betterwrite/pdfeasy',
  },
  source: {
    github: 'betterwrite/pdfeasy#main/packages/nuxt',
    npm: 'nuxt-pdfeasy',
  },
  stats: {
    stars: 93,
    downloads: {
      monthly: 278,
      weekly: 62,
    },
  },
})
