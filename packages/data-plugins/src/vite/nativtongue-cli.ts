import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'nativtongue-cli',
  description: 'CLI and dev tooling for nativtongue — extract, sync, and translate',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'i18n',
    'internationalization',
    'translation',
    'cli',
    'vite-plugin',
    'claude',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ada-h/nativtongue',
    npm: 'https://www.npmjs.com/package/nativtongue-cli',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
