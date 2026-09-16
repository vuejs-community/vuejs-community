import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-qingkuai',
  description: 'vite-plugin-qingkuai is a Vite plugin that transforms `.qk` component files into native JavaScript using the Qingkuai compiler. It enables fast and seamless development of web applications built with [Qingkuai](https://qingkuai.dev).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'qingkuai',
    'vite plugin',
    'vite-plugin',
  ],
  source: {
    github: 'qingkuai-js/vite-plugin',
    npm: 'vite-plugin-qingkuai',
  },
  links: {
    github: 'https://github.com/qingkuai-js/vite-plugin',
    npm: 'https://www.npmjs.com/package/vite-plugin-qingkuai',
    website: 'https://github.com/qingkuai-js/vite-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 70,
      weekly: 13,
    },
  },
})
