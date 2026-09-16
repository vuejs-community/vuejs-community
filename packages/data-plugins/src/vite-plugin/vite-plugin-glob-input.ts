import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-glob-input',
  description: 'Vite plugin to add files to build.rollupOptions.input using fast-glob',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'static',
    'glob',
  ],
  source: {
    github: 'ozekimasaki/vite-plugin-glob-input',
    npm: 'vite-plugin-glob-input',
  },
  links: {
    github: 'https://github.com/ozekimasaki/vite-plugin-glob-input',
    npm: 'https://www.npmjs.com/package/vite-plugin-glob-input',
    website: 'https://github.com/ozekimasaki/vite-plugin-glob-input#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 572,
      weekly: 119,
    },
  },
})
