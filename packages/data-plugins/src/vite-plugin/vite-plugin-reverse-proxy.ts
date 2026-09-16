import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-reverse-proxy',
  description: 'Makes the script to be served with the text/javascript MIME type instead of module MIME type.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-plugin-reverse-proxy',
  ],
  source: {
    github: 'fengxinming/vite-plugins',
    npm: 'vite-plugin-reverse-proxy',
  },
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-reverse-proxy',
    website: 'https://github.com/fengxinming/vite-plugins#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 384,
      weekly: 4,
    },
  },
})
