import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kanton-basel-stadt/designsystem',
  description: 'Unplugin to install the digital design system of the canton of Basel-Stadt',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'basel-stadt',
    'designsystem',
    'switzerland',
  ],
  links: {
    github: 'https://github.com/kanton-basel-stadt/designsystem',
    npm: 'https://www.npmjs.com/package/@kanton-basel-stadt/designsystem',
    website: 'https://kanton-basel-stadt.github.io/storybook',
  },
  source: {
    github: 'kanton-basel-stadt/designsystem',
    npm: '@kanton-basel-stadt/designsystem',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 2422,
      weekly: 314,
    },
  },
})
