import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-vue-setup-attributes',
  description: 'Extend vue script setup syntax,make it support the name and inheritAttrs attribute.',
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
  source: {
    github: 'zedyuan999/unplugin-vue-setup-attributes',
    npm: 'unplugin-vue-setup-attributes',
  },
  links: {
    github: 'https://github.com/zedyuan999/unplugin-vue-setup-attributes',
    npm: 'https://www.npmjs.com/package/unplugin-vue-setup-attributes',
    website: 'https://github.com/zedyuan999/unplugin-vue-setup-attributes/blob/main/README.md',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
