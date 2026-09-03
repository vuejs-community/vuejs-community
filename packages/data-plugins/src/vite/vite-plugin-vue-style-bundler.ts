import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-style-bundler',
  description: '`Automatically extract the `css` in `Vue` components and bundle them into the `js` source code, and then automatically insert the style into the head at runtime.',
  version: '1.0.9',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vite-plugin-vue',
    'css-in-js',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/zhangfisher/vite-plugin-vue-style-bundler',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-style-bundler',
  },
  stats: {
    downloads: {
      monthly: 50,
      weekly: 6,
    },
  },
})
