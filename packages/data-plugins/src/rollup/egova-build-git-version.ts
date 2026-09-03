import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'egova-build-git-version',
  description: 'A rollup plugin, add git info version.json to dist',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'egova-build-git-version',
    'version',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/peritot/rollup-plugin-build-git-version',
    npm: 'https://www.npmjs.com/package/egova-build-git-version',
  },
  stats: {
    downloads: {
      monthly: 32,
      weekly: 5,
    },
  },
})
