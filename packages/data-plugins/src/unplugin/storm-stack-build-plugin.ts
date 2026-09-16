import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@storm-stack/build-plugin',
  description: '⚡ A `unplugin` plugin used in Storm Stack build processes to handle `StormEnv` parameters, typia transforms, and much more.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'storm-software/storm-stack',
    npm: '@storm-stack/build-plugin',
  },
  links: {
    github: 'https://github.com/storm-software/storm-stack',
    npm: 'https://www.npmjs.com/package/@storm-stack/build-plugin',
    website: 'https://stormsoftware.com',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 20,
      weekly: 3,
    },
  },
})
