import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ttsc/unplugin',
  description: 'Bundler adapters for ttsc plugins.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'ttsc',
    'unplugin',
    'vite',
    'esbuild',
    'rollup',
    'webpack',
    'typescript',
    'tsgo',
  ],
  source: {
    github: 'samchon/ttsc',
    npm: '@ttsc/unplugin',
  },
  links: {
    github: 'https://github.com/samchon/ttsc',
    npm: 'https://www.npmjs.com/package/@ttsc/unplugin',
    website: 'https://ttsc.dev',
  },
  stats: {
    stars: 335,
    downloads: {
      monthly: 12817,
      weekly: 2188,
    },
  },
})
