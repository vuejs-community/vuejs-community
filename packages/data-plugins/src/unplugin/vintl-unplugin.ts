import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vintl/unplugin',
  description: 'Transform files containing ICU MessageFormat messages.',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'i18n',
    'icu-messageformat',
    'rollup',
    'vite',
    'wepack',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/vintl-dev/unplugin',
    npm: 'https://www.npmjs.com/package/@vintl/unplugin',
  },
  stats: {
    downloads: {
      monthly: 1080,
      weekly: 135,
    },
  },
})
