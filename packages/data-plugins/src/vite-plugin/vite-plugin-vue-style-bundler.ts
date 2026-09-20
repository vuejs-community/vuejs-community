import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-style-bundler',
  description: '`Automatically extract the `css` in `Vue` components and bundle them into the `js` source code, and then automatically insert the style into the head at runtime.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vite-plugin-vue',
    'css-in-js',
  ],
  links: {
    github: 'https://github.com/zhangfisher/vite-plugin-vue-style-bundler',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-style-bundler',
    website: 'https://github.com/zhangfisher/vite-plugin-vue-style-bundler#readme',
  },
  source: {
    github: 'zhangfisher/vite-plugin-vue-style-bundler',
    npm: 'vite-plugin-vue-style-bundler',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 33,
      weekly: 5,
    },
  },
})
