import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@import-meta-env/unplugin',
  description: 'Build once, deploy anywhere. Startup/runtime environment variable solution for JavaScript.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'unplugin',
    'rollup-plugin',
    'vite-plugin',
    'webpack-plugin',
    'twelve-factor',
    'dotenv',
  ],
  links: {
    github: 'https://github.com/runtime-env/import-meta-env',
    npm: 'https://www.npmjs.com/package/@import-meta-env/unplugin',
    website: 'https://github.com/runtime-env/import-meta-env/tree/main/packages/unplugin#readme',
  },
  source: {
    github: 'runtime-env/import-meta-env',
    npm: '@import-meta-env/unplugin',
  },
  stats: {
    stars: 276,
    downloads: {
      monthly: 147529,
      weekly: 29696,
    },
  },
})
