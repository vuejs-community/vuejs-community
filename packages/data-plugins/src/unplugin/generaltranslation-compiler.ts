import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@generaltranslation/compiler',
  description: 'Universal plugin for compile-time optimization of GT translation components',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'webpack',
    'vite',
    'rollup',
    'rspack',
    'gt-next',
    'translation',
    'i18n',
  ],
  links: {
    github: 'https://github.com/generaltranslation/gt',
    npm: 'https://www.npmjs.com/package/@generaltranslation/compiler',
    website: 'https://github.com/generaltranslation/gt#readme',
  },
  source: {
    github: 'generaltranslation/gt',
    npm: '@generaltranslation/compiler',
  },
  stats: {
    stars: 1058,
    downloads: {
      monthly: 103740,
      weekly: 24517,
    },
  },
})
