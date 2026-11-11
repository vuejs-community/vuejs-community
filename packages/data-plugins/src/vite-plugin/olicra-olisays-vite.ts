import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@olicra/olisays-vite',
  description: 'Vite plugin for OliSays: on the dev server, remembers which i18next key produced each string in a React app, so the OliSays Inspector Chrome extension opens the exact key when you Option-click it.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'i18next',
    'react-i18next',
    'i18n',
    'translation',
    'localization',
    'olisays',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@olicra/olisays-vite',
  },
  source: {
    npm: '@olicra/olisays-vite',
  },
})
