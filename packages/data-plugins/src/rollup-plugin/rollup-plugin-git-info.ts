import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-git-info',
  description: 'Rollup plugin to export git/build information',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'git',
    'rollup',
    'rollup-plugin',
  ],
  source: {
    github: 'vapier/rollup-plugin-git-info',
    npm: 'rollup-plugin-git-info',
  },
  links: {
    github: 'https://github.com/vapier/rollup-plugin-git-info',
    npm: 'https://www.npmjs.com/package/rollup-plugin-git-info',
    website: 'https://github.com/vapier/rollup-plugin-git-info',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 2988,
      weekly: 207,
    },
  },
})
