import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-consolelogplus',
  description: '自动改造 console.log 打印出该 console 所处的文件和代码在原文件（未经过任何编译）中所在行数，如果是变量的话还会加上变量名。兼容rollup和vite。',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'console.log',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-consolelogplus',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 2,
    },
  },
})
