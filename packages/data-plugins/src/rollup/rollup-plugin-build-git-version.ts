import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-build-git-version',
  description: 'A rollup plugin, add git info version.json to dist',
  icon: 'logos:rollupjs',
  version: '0.0.9',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'version',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'peritot/rollup-plugin-build-git-version',
    npm: 'rollup-plugin-build-git-version',
  },
  links: {
    github: 'https://github.com/peritot/rollup-plugin-build-git-version',
    npm: 'https://www.npmjs.com/package/rollup-plugin-build-git-version',
  },
  stats: {
    downloads: {
      monthly: 150,
      weekly: 29,
    },
  },
})
