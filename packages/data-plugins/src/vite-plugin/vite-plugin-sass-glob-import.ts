import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sass-glob-import',
  description: 'Use glob syntax for imports in your main Sass or SCSS file.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sass',
  ],
  source: {
    github: 'cmalven/vite-plugin-sass-glob-import',
    npm: 'vite-plugin-sass-glob-import',
  },
  links: {
    github: 'https://github.com/cmalven/vite-plugin-sass-glob-import',
    npm: 'https://www.npmjs.com/package/vite-plugin-sass-glob-import',
    website: 'https://github.com/cmalven/vite-plugin-sass-glob-import#readme',
  },
  stats: {
    stars: 23,
    downloads: {
      monthly: 75686,
      weekly: 14773,
    },
  },
})
