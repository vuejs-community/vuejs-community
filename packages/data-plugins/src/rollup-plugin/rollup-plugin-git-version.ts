import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-git-version',
  description: 'RollupJS plugin to include the git rev in the version of package.json',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'semver',
    'version',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-git-version',
    website: 'https://gitlab.com/IvanSanchez/rollup-plugin-git-version',
  },
  source: {
    npm: 'rollup-plugin-git-version',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18676,
      weekly: 4804,
    },
  },
})
