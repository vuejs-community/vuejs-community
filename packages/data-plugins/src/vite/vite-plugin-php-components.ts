import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-php-components',
  description: 'Transpile PHP-Components to PHP calls',
  icon: 'logos:vite-icon',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'php components',
    'php',
    'php transpilation',
    'php processing',
    'components',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'nititech/vite-plugin-php-components',
    npm: 'vite-plugin-php-components',
  },
  links: {
    github: 'https://github.com/nititech/vite-plugin-php-components',
    npm: 'https://www.npmjs.com/package/vite-plugin-php-components',
  },
  stats: {
    downloads: {
      monthly: 77,
      weekly: 10,
    },
  },
})
