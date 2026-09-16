import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'babel-plugin-saykit',
  description: 'Babel plugin for SayKit',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'i18n',
    'rollup',
    'saykit',
    'unplugin',
    'vite',
    'webpack',
  ],
  source: {
    github: 'k0d13/saykit',
    npm: 'babel-plugin-saykit',
  },
  links: {
    github: 'https://github.com/k0d13/saykit',
    npm: 'https://www.npmjs.com/package/babel-plugin-saykit',
    website: 'https://github.com/k0d13/saykit#readme',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 841,
      weekly: 345,
    },
  },
})
