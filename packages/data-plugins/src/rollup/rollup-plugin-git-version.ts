import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-git-version',
  description: 'RollupJS plugin to include the git rev in the version of package.json',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'semver',
    'version',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-git-version',
  },
  stats: {
    downloads: {
      monthly: 13545,
      weekly: 5071,
    },
  },
})
