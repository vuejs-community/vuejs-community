import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-lgcjs',
  description: 'Rollup plugin for transpiling .xlgc files  + live editor support',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'lgcjs',
    'librogame',
    'librogamesland',
  ],
  links: {
    github: 'https://github.com/librogamesland/rollup-plugin-lgcjs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-lgcjs',
    website: 'https://github.com/librogamesland/rollup-plugin-lgcjs#readme',
  },
  source: {
    github: 'librogamesland/rollup-plugin-lgcjs',
    npm: 'rollup-plugin-lgcjs',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
