import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-squirrelly',
  description: 'A Vite plugin to render files with SquirrellyJS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'squirrelljs',
    'static',
    'site',
    'generator',
  ],
  source: {
    github: 'reedhewitt/vite-plugin-squirrelly',
    npm: 'vite-plugin-squirrelly',
  },
  links: {
    github: 'https://github.com/reedhewitt/vite-plugin-squirrelly',
    npm: 'https://www.npmjs.com/package/vite-plugin-squirrelly',
    website: 'https://github.com/reedhewitt/vite-plugin-squirrelly#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
