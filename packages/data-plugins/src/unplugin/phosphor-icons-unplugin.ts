import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@phosphor-icons/unplugin',
  description: '> [!WARNING] > This plugin is extremely experimental, and is subject to change. Use at your own risk!',
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
  ],
  links: {
    github: 'https://github.com/phosphor-icons/unplugin',
    npm: 'https://www.npmjs.com/package/@phosphor-icons/unplugin',
    website: 'https://github.com/phosphor-icons/unplugin#readme',
  },
  source: {
    github: 'phosphor-icons/unplugin',
    npm: '@phosphor-icons/unplugin',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 1243,
      weekly: 264,
    },
  },
})
