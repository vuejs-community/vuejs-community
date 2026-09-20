import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ohos-ports/unplugin-vue',
  description: 'Transform Vue 3 SFC to JavaScript.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'vue',
    'sfc',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'esbuild',
  ],
  links: {
    github: 'https://github.com/ohos-ports/ohos-ports',
    npm: 'https://www.npmjs.com/package/@ohos-ports/unplugin-vue',
    website: 'https://github.com/unplugin/unplugin-vue#readme',
  },
  source: {
    github: 'ohos-ports/ohos-ports',
    npm: '@ohos-ports/unplugin-vue',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 78,
      weekly: 78,
    },
  },
})
