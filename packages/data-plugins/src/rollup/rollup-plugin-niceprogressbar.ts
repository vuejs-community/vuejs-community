import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-niceprogressbar',
  description: 'Rollup Progress Bar Plugin',
  icon: 'logos:rollupjs',
  version: '0.0.1-alpha.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'progress',
    'progressbar',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'gwynne/rollup-plugin-niceprogressbar',
    npm: 'rollup-plugin-niceprogressbar',
  },
  links: {
    github: 'https://github.com/gwynne/rollup-plugin-niceprogressbar',
    npm: 'https://www.npmjs.com/package/rollup-plugin-niceprogressbar',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
