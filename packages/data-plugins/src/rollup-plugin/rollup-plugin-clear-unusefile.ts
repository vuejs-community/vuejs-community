import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-clear-unusefile',
  description: '一个用来清理项目中没有使用的文件的 rollup 插件',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'vue3',
    'rollup',
    'vite',
    'rollup-plugin',
    'vite-plugin',
    'typescript',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-clear-unusefile',
  },
  source: {
    npm: 'rollup-plugin-clear-unusefile',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
