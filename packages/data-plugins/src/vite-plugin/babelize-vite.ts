import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@babelize/vite',
  description: 'Vite plugin for Babelize — auto-discover strings and generate translation lockfile at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'babelize',
    'i18n',
    'localization',
    'translation',
    'vite',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@babelize/vite',
    website: 'https://docs.babelize.co/sdk',
  },
  source: {
    npm: '@babelize/vite',
  },
})
