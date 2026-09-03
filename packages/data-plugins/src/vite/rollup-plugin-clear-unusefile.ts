import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-clear-unusefile',
  description: '一个用来清理项目中没有使用的文件的 rollup 插件',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vue3',
    'rollup',
    'vite',
    'rollup-plugin',
    'vite-plugin',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-clear-unusefile',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
