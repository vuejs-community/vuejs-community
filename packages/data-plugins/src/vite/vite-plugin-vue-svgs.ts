import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-svgs',
  description: 'A vite plugin, can import svg as vue component and edit svg color by props',
  version: '0.1.9-vue',
  category: 'plugin',
  tags: [
    'svg',
    'vite',
    'vite-plugin',
    'component',
    'plugin',
    'color',
    'vue',
    'vue3',
    'loader',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ChaconneLuo/vite-plugin-svgs',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-svgs',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 6,
    },
  },
})
