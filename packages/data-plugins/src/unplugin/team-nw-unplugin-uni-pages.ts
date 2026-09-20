import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@team-nw/unplugin-uni-pages',
  description: '```shell pnpm i -D @team-nw/unplugin-uni-pages ```',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'transform',
  ],
  links: {
    github: 'https://github.com/team-nw/unplugin-uni-pages',
    npm: 'https://www.npmjs.com/package/@team-nw/unplugin-uni-pages',
    website: 'https://github.com/team-nw/unplugin-uni-pages#readme',
  },
  source: {
    github: 'team-nw/unplugin-uni-pages',
    npm: '@team-nw/unplugin-uni-pages',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 36,
      weekly: 4,
    },
  },
})
