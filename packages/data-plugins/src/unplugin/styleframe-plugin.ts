import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@styleframe/plugin',
  description: 'Unplugin for Styleframe. Use it with Vite, Webpack, Astro, Nuxt, Rollup, Rspack, and more.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'styleframe',
    'unplugin',
    'astro',
    'nuxt',
    'vite',
    'webpack',
    'rollup',
    'rspack',
    'transform',
  ],
  source: {
    github: 'styleframe-dev/styleframe',
    npm: '@styleframe/plugin',
  },
  links: {
    github: 'https://github.com/styleframe-dev/styleframe',
    npm: 'https://www.npmjs.com/package/@styleframe/plugin',
    website: 'https://github.com/styleframe-dev/styleframe#readme',
  },
  stats: {
    stars: 91,
    downloads: {
      monthly: 6953,
      weekly: 2020,
    },
  },
})
