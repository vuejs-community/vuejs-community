import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-glob-input',
  description: 'Vite plugin to add files to build.rollupOptions.input using fast-glob',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'ozekimasaki/vite-plugin-glob-input',
    npm: 'vite-plugin-glob-input',
  },
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
