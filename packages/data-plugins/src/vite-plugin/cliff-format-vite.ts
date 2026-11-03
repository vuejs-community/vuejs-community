import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cliff-format/vite',
  description: 'Vite plugin for importing CLIFF files and generating typed entry IDs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cliff',
    'i18n',
    'l10n',
    'localization',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cliff-format/cliff-js',
    npm: 'https://www.npmjs.com/package/@cliff-format/vite',
    website: 'https://github.com/cliff-format/cliff-js#readme',
  },
  source: {
    github: 'cliff-format/cliff-js',
    npm: '@cliff-format/vite',
  },
})
