import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@storm-stack/core',
  description: 'A build toolkit and runtime used by Storm Software in TypeScript applications',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'storm-stack',
    'storm-software',
    'unplugin',
    'typedoc',
    'typescript',
    'deepkit',
    'dotenv',
    'babel',
    'esbuild',
    'unbuild',
    'nuxt',
    'vite',
    'rollup',
    'rspack',
    'webpack',
    'astro',
  ],
  source: {
    github: 'storm-software/storm-stack',
    npm: '@storm-stack/core',
  },
  links: {
    github: 'https://github.com/storm-software/storm-stack',
    npm: 'https://www.npmjs.com/package/@storm-stack/core',
    website: 'https://stormsoftware.com',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 175,
      weekly: 38,
    },
  },
})
