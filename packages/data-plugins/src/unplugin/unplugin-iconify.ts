import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-iconify',
  description: 'Unplugin for iconify.',
  icon: 'icon:dark-unplugin',
  version: '0.1.1',
  category: 'plugin',
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
  types: [
    'unplugin',
  ],
  source: {
    github: 'yunsii/unplugin-iconify',
    npm: 'unplugin-iconify',
  },
  links: {
    github: 'https://github.com/yunsii/unplugin-iconify',
    npm: 'https://www.npmjs.com/package/unplugin-iconify',
  },
  stats: {
    downloads: {
      monthly: 230,
      weekly: 109,
    },
  },
})
