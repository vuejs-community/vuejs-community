import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@huntersofbook/i18n',
  description: 'It\'s basically a tool that takes a template with translation keys and syncs them to the given language. You can directly connect the outputs to the i18n libraries you use.',
  version: '0.8.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'i18n',
    'i18n template',
    'vite i18n',
    'nuxt i18n',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/huntersofbook/i18n',
    npm: 'https://www.npmjs.com/package/@huntersofbook/i18n',
  },
  stats: {
    downloads: {
      monthly: 69,
      weekly: 11,
    },
  },
})
