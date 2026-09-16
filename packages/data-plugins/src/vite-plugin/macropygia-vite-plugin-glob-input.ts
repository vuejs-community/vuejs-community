import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@macropygia/vite-plugin-glob-input',
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
    github: 'macropygia/static-site-stack',
    npm: '@macropygia/vite-plugin-glob-input',
  },
  links: {
    github: 'https://github.com/macropygia/static-site-stack',
    npm: 'https://www.npmjs.com/package/@macropygia/vite-plugin-glob-input',
    website: 'https://github.com/macropygia/static-site-stack/tree/main/packages/vite-plugin-glob-input#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 53,
      weekly: 3,
    },
  },
})
