import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ohos-ports/unplugin-unused',
  description: 'Check unused dependencies.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'vite',
    'esbuild',
    'webpack',
  ],
  links: {
    github: 'https://github.com/ohos-ports/ohos-ports',
    npm: 'https://www.npmjs.com/package/@ohos-ports/unplugin-unused',
    website: 'https://github.com/unplugin/unplugin-unused#readme',
  },
  source: {
    github: 'ohos-ports/ohos-ports',
    npm: '@ohos-ports/unplugin-unused',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 84,
      weekly: 84,
    },
  },
})
