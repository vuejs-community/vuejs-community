import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@storm-stack/build-plugin',
  description: '⚡ A `unplugin` plugin used in Storm Stack build processes to handle `StormEnv` parameters, typia transforms, and much more.',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'storm-stack',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'rspack',
    'auto-import',
    'typia',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/storm-software/storm-stack',
    npm: 'https://www.npmjs.com/package/@storm-stack/build-plugin',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 9,
    },
  },
})
