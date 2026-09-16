import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'esbuild-plugin-rawbundle',
  description: '### Installation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'divriots/esbuild-plugin-raw-loader',
    npm: 'esbuild-plugin-rawbundle',
  },
  links: {
    github: 'https://github.com/divriots/esbuild-plugin-raw-loader',
    npm: 'https://www.npmjs.com/package/esbuild-plugin-rawbundle',
    website: 'https://github.com/divriots/esbuild-plugin-raw-loader/tree/master',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 361,
      weekly: 12,
    },
  },
})
