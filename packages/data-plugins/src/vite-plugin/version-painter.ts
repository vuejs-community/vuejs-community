import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'version-painter',
  description: 'Vite 插件：构建时写入版本脚本并向 HTML 注入构建信息 meta',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'build-info',
    'meta',
  ],
  source: {
    github: 'lazy-people-org/version-painter',
    npm: 'version-painter',
  },
  links: {
    github: 'https://github.com/lazy-people-org/version-painter',
    npm: 'https://www.npmjs.com/package/version-painter',
    website: 'https://github.com/lazy-people-org/version-painter#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
