import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-remote-assets',
  description: 'Bundles your assets from remote urls with your app',
  icon: 'logos:vite-icon',
  version: '2.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'antfu/vite-plugin-remote-assets',
    npm: 'vite-plugin-remote-assets',
  },
  links: {
    github: 'https://github.com/antfu/vite-plugin-remote-assets',
    npm: 'https://www.npmjs.com/package/vite-plugin-remote-assets',
  },
  stats: {
    downloads: {
      monthly: 300781,
      weekly: 88808,
    },
  },
})
