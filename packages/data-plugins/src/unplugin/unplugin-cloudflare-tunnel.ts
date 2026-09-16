import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-cloudflare-tunnel',
  description: 'A plugin that automatically creates and manages Cloudflare tunnels for local development',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'o-az/unplugin-cloudflare-tunnel',
    npm: 'unplugin-cloudflare-tunnel',
  },
  links: {
    github: 'https://github.com/o-az/unplugin-cloudflare-tunnel',
    npm: 'https://www.npmjs.com/package/unplugin-cloudflare-tunnel',
    website: 'https://github.com/o-az/unplugin-cloudflare-tunnel#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40,
      weekly: 3,
    },
  },
})
