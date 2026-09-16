import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vintl/unplugin',
  description: 'Transform files containing ICU MessageFormat messages.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'i18n',
    'icu-messageformat',
    'rollup',
    'vite',
    'wepack',
    'unplugin',
  ],
  source: {
    github: 'vintl-dev/unplugin',
    npm: '@vintl/unplugin',
  },
  links: {
    github: 'https://github.com/vintl-dev/unplugin',
    npm: 'https://www.npmjs.com/package/@vintl/unplugin',
    website: 'https://github.com/vintl-dev/unplugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 446,
      weekly: 77,
    },
  },
})
