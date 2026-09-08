import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-svelte-vapor',
  description: 'unplugin for svelte-vapor',
  icon: 'icon:dark-unplugin',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'kazupon/inclusion-vapor',
    npm: 'unplugin-svelte-vapor',
  },
  links: {
    github: 'https://github.com/kazupon/inclusion-vapor',
    npm: 'https://www.npmjs.com/package/unplugin-svelte-vapor',
  },
  stats: {
    downloads: {
      monthly: 38,
      weekly: 25,
    },
  },
})
