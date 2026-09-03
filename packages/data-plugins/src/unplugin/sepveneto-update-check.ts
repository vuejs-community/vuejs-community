import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@sepveneto/update-check',
  description: '定时查询版本更新',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/antfu/unplugin-starter',
    npm: 'https://www.npmjs.com/package/@sepveneto/update-check',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 8,
    },
  },
})
