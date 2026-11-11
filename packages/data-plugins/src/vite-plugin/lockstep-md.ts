import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'lockstep-md',
  description: 'Multilingual Markdown docs that stay in lockstep: a strict Markdown subset whose build fails when a translation drifts from the original.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'markdown',
    'i18n',
    'translation',
    'documentation',
    'localization',
    'vite-plugin',
    'docs',
    'parity',
  ],
  links: {
    github: 'https://github.com/EnomotiaGame/lockstep-md',
    npm: 'https://www.npmjs.com/package/lockstep-md',
    website: 'https://github.com/EnomotiaGame/lockstep-md#readme',
  },
  source: {
    github: 'EnomotiaGame/lockstep-md',
    npm: 'lockstep-md',
  },
})
