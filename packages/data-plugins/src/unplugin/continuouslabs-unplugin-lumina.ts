import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@continuouslabs/unplugin-lumina',
  description: 'Universal compiler plugin for Lumina i18n.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'i18n',
    'vite',
    'webpack',
    'rollup',
    'unplugin',
    'lumina',
    'internationalization',
  ],
  links: {
    github: 'https://github.com/Continuous-Labs/lumina-core',
    npm: 'https://www.npmjs.com/package/@continuouslabs/unplugin-lumina',
    website: 'https://lumina-i18n.dev',
  },
  source: {
    github: 'Continuous-Labs/lumina-core',
    npm: '@continuouslabs/unplugin-lumina',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 42,
      weekly: 3,
    },
  },
})
