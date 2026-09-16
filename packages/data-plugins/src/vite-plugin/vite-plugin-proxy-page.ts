import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-proxy-page',
  description: 'A Vite plugin for developing an application in the context of a remote page.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'proxy',
    'rewrite',
  ],
  source: {
    npm: 'vite-plugin-proxy-page',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-proxy-page',
    website: 'https://macarthur.me/posts/project-local-spa-onto-production-page',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 69,
      weekly: 15,
    },
  },
})
