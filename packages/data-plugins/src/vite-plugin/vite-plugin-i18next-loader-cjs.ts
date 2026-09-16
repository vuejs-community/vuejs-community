import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-i18next-loader-cjs',
  description: 'Vite plugin loader for client embedded i18next locales composited from one to many json or yaml files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'loader',
    'i18next',
    'locales',
    'yaml',
    'json',
  ],
  source: {
    github: 'alienfast/vite-plugin-i18next-loader',
    npm: 'vite-plugin-i18next-loader-cjs',
  },
  links: {
    github: 'https://github.com/alienfast/vite-plugin-i18next-loader',
    npm: 'https://www.npmjs.com/package/vite-plugin-i18next-loader-cjs',
    website: 'https://github.com/alienfast/vite-plugin-i18next-loader',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
