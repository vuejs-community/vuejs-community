import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pact-toolbox/unplugin',
  description: '',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'esbuild',
    'pact-lang',
    'kadena',
  ],
  source: {
    github: 'kadena-community/pact-toolbox',
    npm: '@pact-toolbox/unplugin',
  },
  links: {
    github: 'https://github.com/kadena-community/pact-toolbox',
    npm: 'https://www.npmjs.com/package/@pact-toolbox/unplugin',
    website: 'https://github.com/kadena-community/pact-toolbox#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 78,
      weekly: 17,
    },
  },
})
