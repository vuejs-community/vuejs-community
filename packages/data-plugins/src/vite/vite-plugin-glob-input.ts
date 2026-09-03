import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-glob-input',
  description: 'Vite plugin to add files to build.rollupOptions.input using fast-glob',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'static',
    'glob',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ozekimasaki/vite-plugin-glob-input',
    npm: 'https://www.npmjs.com/package/vite-plugin-glob-input',
  },
  stats: {
    downloads: {
      monthly: 494,
      weekly: 145,
    },
  },
})
