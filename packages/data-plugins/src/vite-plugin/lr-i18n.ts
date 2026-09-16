import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'lr-i18n',
  description: 'Allows to connect your `Laravel` Framework localization files with `React`.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-plugin-laravel',
    'laravel',
    'react',
    'i18n',
    'inertiajs',
  ],
  source: {
    github: 'asajal/laravel-react-i18n',
    npm: 'lr-i18n',
  },
  links: {
    github: 'https://github.com/asajal/laravel-react-i18n',
    npm: 'https://www.npmjs.com/package/lr-i18n',
    website: 'https://github.com/asajal/laravel-react-i18n#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 95,
      weekly: 15,
    },
  },
})
