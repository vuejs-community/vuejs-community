import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'egova-build-git-version',
  description: 'A rollup plugin, add git info version.json to dist',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'egova-build-git-version',
    'version',
  ],
  source: {
    github: 'peritot/rollup-plugin-build-git-version',
    npm: 'egova-build-git-version',
  },
  links: {
    github: 'https://github.com/peritot/rollup-plugin-build-git-version',
    npm: 'https://www.npmjs.com/package/egova-build-git-version',
    website: 'https://github.com/peritot/rollup-plugin-build-git-version#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 1,
    },
  },
})
