import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-consolelogplus',
  description: '自动改造 console.log 打印出该 console 所处的文件和代码在原文件（未经过任何编译）中所在行数，如果是变量的话还会加上变量名。兼容rollup和vite。',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'console.log',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-consolelogplus',
  },
  source: {
    npm: 'rollup-plugin-consolelogplus',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
