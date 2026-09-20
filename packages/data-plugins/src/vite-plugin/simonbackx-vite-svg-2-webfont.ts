import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@simonbackx/vite-svg-2-webfont',
  description: 'A vite plugin which generates a webfont out of svg icons',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'svg-font',
    'webfont',
    'webfont-loader',
  ],
  links: {
    github: 'https://github.com/atlowChemi/vite-svg-2-webfont',
    npm: 'https://www.npmjs.com/package/@simonbackx/vite-svg-2-webfont',
    website: 'https://github.com/chemiAtlow/vite-svg-2-webfont#readme',
  },
  source: {
    github: 'atlowChemi/vite-svg-2-webfont',
    npm: '@simonbackx/vite-svg-2-webfont',
  },
  stats: {
    stars: 43,
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
