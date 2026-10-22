import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'yapyak',
  description: 'Compile-time i18n. Write t(\'Save changes\') and yapyak keeps your locale files in sync, with optional AI translation.',
  icon: 'icon:yapyak',
  category: 'nuxt',
  types: [
    'i18n',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/yapyak/yapyak',
    npm: 'https://npmjs.com/package/@yapyak/nuxt',
    website: 'https://yapyak.dev',
  },
  source: {
    github: 'yapyak/yapyak',
    npm: '@yapyak/nuxt',
  },
})
