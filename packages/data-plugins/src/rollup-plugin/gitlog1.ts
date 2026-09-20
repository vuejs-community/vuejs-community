import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'gitlog1',
  description: 'rollup plugin that writes the last git commit (hash, author email, date) to public/build/commit.txt at build end. cross-platform.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'git',
    'commit',
    'build',
  ],
  links: {
    github: 'https://github.com/royashbrook/gitlog1',
    npm: 'https://www.npmjs.com/package/gitlog1',
    website: 'https://github.com/royashbrook/gitlog1',
  },
  source: {
    github: 'royashbrook/gitlog1',
    npm: 'gitlog1',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
