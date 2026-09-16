import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-svelte-vapor',
  description: 'unplugin for svelte-vapor',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  source: {
    github: 'kazupon/inclusion-vapor',
    npm: 'unplugin-svelte-vapor',
  },
  links: {
    github: 'https://github.com/kazupon/inclusion-vapor',
    npm: 'https://www.npmjs.com/package/unplugin-svelte-vapor',
    website: 'https://github.com/kazupon/inclusion-vapor#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 1,
    },
  },
})
