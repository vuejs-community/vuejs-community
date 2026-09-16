import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ministryplace/flowmark-unplugin',
  description: 'Flowmark file imports for Vite, Rollup, Rolldown, Webpack, Rspack, and esbuild.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'diagram',
    'flowmark',
    'rollup',
    'unplugin',
    'vite',
    'webpack',
  ],
  source: {
    github: 'ministryplace/flowmark',
    npm: '@ministryplace/flowmark-unplugin',
  },
  links: {
    github: 'https://github.com/ministryplace/flowmark',
    npm: 'https://www.npmjs.com/package/@ministryplace/flowmark-unplugin',
    website: 'https://github.com/ministryplace/flowmark#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 196,
      weekly: 5,
    },
  },
})
