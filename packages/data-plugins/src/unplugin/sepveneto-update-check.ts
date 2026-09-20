import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sepveneto/update-check',
  description: '定时查询版本更新',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/antfu/unplugin-starter',
    npm: 'https://www.npmjs.com/package/@sepveneto/update-check',
    website: 'https://github.com/antfu/unplugin-starter#readme',
  },
  source: {
    github: 'antfu/unplugin-starter',
    npm: '@sepveneto/update-check',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
