import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-github-code-import',
  description: 'Rollup plugin that imports code from a GitHub URL',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'markdown',
    'code-block',
  ],
  source: {
    github: 'haocheng6/rollup-plugin-github-code-import',
    npm: 'rollup-plugin-github-code-import',
  },
  links: {
    github: 'https://github.com/haocheng6/rollup-plugin-github-code-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-github-code-import',
    website: 'https://github.com/haocheng6/rollup-plugin-github-code-import#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
