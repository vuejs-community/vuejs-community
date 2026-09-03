import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'gitlog1',
  description: 'rollup plugin that writes the last git commit (hash, author email, date) to public/build/commit.txt at build end. cross-platform.',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'git',
    'commit',
    'build',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/royashbrook/gitlog1',
    npm: 'https://www.npmjs.com/package/gitlog1',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 3,
    },
  },
})
