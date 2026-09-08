import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-caddy',
  description: 'Caddy plugin for Vite, Astro, esbuild, Rollup, Rolldown, Webpack, Rspack, Astro, and Farm',
  icon: 'icon:dark-unplugin',
  version: '0.0.6',
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
  source: {
    github: 'o-az/unplugin-caddy',
    npm: 'unplugin-caddy',
  },
  links: {
    github: 'https://github.com/o-az/unplugin-caddy',
    npm: 'https://www.npmjs.com/package/unplugin-caddy',
  },
  stats: {
    downloads: {
      monthly: 59,
      weekly: 4,
    },
  },
})
