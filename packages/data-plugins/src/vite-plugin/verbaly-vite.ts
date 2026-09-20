import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@verbaly/vite',
  description: 'Zero-config Vite plugin for Verbaly: extraction, codegen and HMR.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18n',
    'vite-plugin',
    'verbaly',
  ],
  links: {
    github: 'https://github.com/AronSoto/verbaly',
    npm: 'https://www.npmjs.com/package/@verbaly/vite',
    website: 'https://verbaly-web.vercel.app/docs/frameworks/vite',
  },
  source: {
    github: 'AronSoto/verbaly',
    npm: '@verbaly/vite',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 2948,
      weekly: 1007,
    },
  },
})
