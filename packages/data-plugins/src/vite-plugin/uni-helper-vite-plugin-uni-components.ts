import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@uni-helper/vite-plugin-uni-components',
  description: '适用于 uni-app (Vue3) 的 unplugin-vue-components，按需自动导入组件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'uniapp',
    'uni-app',
    'component',
    'components',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/uni-helper/vite-plugin-uni-components',
    npm: 'https://www.npmjs.com/package/@uni-helper/vite-plugin-uni-components',
    website: 'https://github.com/uni-helper/vite-plugin-uni-components#readme',
  },
  source: {
    github: 'uni-helper/vite-plugin-uni-components',
    npm: '@uni-helper/vite-plugin-uni-components',
  },
})
