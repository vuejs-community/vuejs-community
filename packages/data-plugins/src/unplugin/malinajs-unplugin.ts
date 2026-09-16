import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'malinajs-unplugin',
  description: 'Transform Malina.js files to plain js',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'rollup',
    'esbuild',
    'malina',
    'malinajs',
  ],
  source: {
    github: 'Artemis69/malinajs-unplugin',
    npm: 'malinajs-unplugin',
  },
  links: {
    github: 'https://github.com/Artemis69/malinajs-unplugin',
    npm: 'https://www.npmjs.com/package/malinajs-unplugin',
    website: 'https://github.com/Artemis69/malinajs-unplugin#readme',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 288,
      weekly: 35,
    },
  },
})
