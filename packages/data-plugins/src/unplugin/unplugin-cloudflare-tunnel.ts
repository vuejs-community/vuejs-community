import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-cloudflare-tunnel',
  description: 'A plugin that automatically creates and manages Cloudflare tunnels for local development',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'rollup',
    'rolldown',
    'esbuild',
    'farm',
    'astro',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/o-az/unplugin-cloudflare-tunnel',
    npm: 'https://www.npmjs.com/package/unplugin-cloudflare-tunnel',
  },
  stats: {
    downloads: {
      monthly: 79,
      weekly: 3,
    },
  },
})
