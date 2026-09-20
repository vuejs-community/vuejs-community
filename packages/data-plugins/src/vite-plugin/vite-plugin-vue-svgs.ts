import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-svgs',
  description: 'A vite plugin, can import svg as vue component and edit svg color by props',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/ChaconneLuo/vite-plugin-svgs',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-svgs',
    website: 'https://github.com/ChaconneLuo/vite-plugin-svgs#readme',
  },
  source: {
    github: 'ChaconneLuo/vite-plugin-svgs',
    npm: 'vite-plugin-vue-svgs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
