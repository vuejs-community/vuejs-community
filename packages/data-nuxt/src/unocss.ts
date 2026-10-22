import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unocss',
  description: 'The instant on-demand atomic CSS engine.',
  icon: 'icon:unocss',
  category: 'nuxt',
  types: [
    'CSS & Theming',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/unocss/unocss',
    npm: 'https://npmjs.com/package/@unocss/nuxt',
    website: 'https://unocss.dev/integrations/nuxt',
  },
  source: {
    github: 'unocss/unocss',
    npm: '@unocss/nuxt',
  },
})
