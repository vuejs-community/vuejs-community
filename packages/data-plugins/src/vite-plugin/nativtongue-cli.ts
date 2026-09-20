import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nativtongue-cli',
  description: 'CLI and dev tooling for nativtongue — extract, sync, and translate',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18n',
    'internationalization',
    'translation',
    'cli',
    'vite-plugin',
    'claude',
  ],
  links: {
    github: 'https://github.com/ada-h/nativtongue',
    npm: 'https://www.npmjs.com/package/nativtongue-cli',
    website: 'https://github.com/ada-h/nativtongue',
  },
  source: {
    github: 'ada-h/nativtongue',
    npm: 'nativtongue-cli',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
