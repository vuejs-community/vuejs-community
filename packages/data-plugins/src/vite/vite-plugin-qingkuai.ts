import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-qingkuai',
  description: 'vite-plugin-qingkuai is a Vite plugin that transforms `.qk` component files into native JavaScript using the Qingkuai compiler. It enables fast and seamless development of web applications built with [Qingkuai](https://qingkuai.dev).',
  version: '1.0.25',
  category: 'plugin',
  tags: [
    'vite',
    'qingkuai',
    'vite plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/qingkuai-js/vite-plugin',
    npm: 'https://www.npmjs.com/package/vite-plugin-qingkuai',
  },
  stats: {
    downloads: {
      monthly: 417,
      weekly: 16,
    },
  },
})
