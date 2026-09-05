import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-reverse-proxy',
  description: 'Makes the script to be served with the text/javascript MIME type instead of module MIME type.',
  version: '8.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite-plugin-reverse-proxy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-reverse-proxy',
  },
  stats: {
    downloads: {
      monthly: 380,
      weekly: 203,
    },
  },
})
