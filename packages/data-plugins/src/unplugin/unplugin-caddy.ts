import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-caddy',
  description: 'Caddy plugin for Vite, Astro, esbuild, Rollup, Rolldown, Webpack, Rspack, Astro, and Farm',
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
  links: {
    github: 'https://github.com/o-az/unplugin-caddy',
    npm: 'https://www.npmjs.com/package/unplugin-caddy',
    website: 'https://github.com/o-az/unplugin-caddy#readme',
  },
  source: {
    github: 'o-az/unplugin-caddy',
    npm: 'unplugin-caddy',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 61,
      weekly: 10,
    },
  },
})
