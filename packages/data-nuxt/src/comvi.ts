import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'comvi',
  description: 'i18n with type-checked keys, ICU plurals and a <T> component for markup inside translations.',
  icon: 'icon:comvi',
  category: 'nuxt',
  types: [
    'i18n',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/comvi-io/comvi-js',
    npm: 'https://npmjs.com/package/@comvi/nuxt',
    website: 'https://comvi.io/docs/i18n/nuxt',
  },
  source: {
    github: 'comvi-io/comvi-js',
    npm: '@comvi/nuxt',
  },
})
