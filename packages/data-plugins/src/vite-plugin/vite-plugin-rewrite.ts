import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rewrite',
  description: '基于rollup，对指定文件，按照规则覆盖',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rewrite',
    'find',
    'replace',
    'regex',
    'regexp',
    'transform',
  ],
  links: {
    github: 'https://github.com/moke8/vite-plugin-rewrite',
    npm: 'https://www.npmjs.com/package/vite-plugin-rewrite',
    website: 'https://github.com/moke8/vite-plugin-rewrite#readme',
  },
  source: {
    github: 'moke8/vite-plugin-rewrite',
    npm: 'vite-plugin-rewrite',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 112,
      weekly: 37,
    },
  },
})
