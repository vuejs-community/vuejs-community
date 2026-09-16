import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-iconify',
  description: 'Unplugin for iconify.',
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
    'iconify',
    'css-icons',
    'css-generators',
  ],
  source: {
    github: 'yunsii/unplugin-iconify',
    npm: 'unplugin-iconify',
  },
  links: {
    github: 'https://github.com/yunsii/unplugin-iconify',
    npm: 'https://www.npmjs.com/package/unplugin-iconify',
    website: 'https://github.com/yunsii/unplugin-iconify#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 178,
      weekly: 25,
    },
  },
})
