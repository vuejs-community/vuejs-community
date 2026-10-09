import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@uni-helper/unplugin-uni-sfc',
  description: '将使用 TypeScript / Less 的 uni-app SFC（.vue / .nvue）在构建阶段降级为 JavaScript / CSS',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'uni-app',
    'uniapp',
    'vue',
    'typescript',
    'vite',
    'tsdown',
    'rolldown',
    'less',
    'transform',
  ],
  links: {
    github: 'https://github.com/uni-helper/unplugin-uni-sfc',
    npm: 'https://www.npmjs.com/package/@uni-helper/unplugin-uni-sfc',
    website: 'https://github.com/uni-helper/unplugin-uni-sfc#readme',
  },
  source: {
    github: 'uni-helper/unplugin-uni-sfc',
    npm: '@uni-helper/unplugin-uni-sfc',
  },
})
