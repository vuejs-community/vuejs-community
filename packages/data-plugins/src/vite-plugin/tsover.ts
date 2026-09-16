import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tsover',
  description: 'Fork of TypeScript with operator overloading',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'esbuild-plugin',
    'operator-overloading',
    'rollup-plugin',
    'typescript',
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
  ],
  source: {
    github: 'software-mansion/tsover',
    npm: 'tsover',
  },
  links: {
    github: 'https://github.com/software-mansion/tsover',
    npm: 'https://www.npmjs.com/package/tsover',
    website: 'https://tsover.swmansion.com',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6053,
      weekly: 2593,
    },
  },
})
