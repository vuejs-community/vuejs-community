import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'start-rollup',
  description: 'A [start][] runner task for [rollup][] through [rolldown][] api',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'babel',
    'build',
    'bundle',
    'compile',
    'esnext',
    'modern',
    'plugin',
    'rollup',
    'rollup-plugin',
    'start',
    'start-task',
    'task',
    'transpile',
  ],
  links: {
    github: 'https://github.com/tunnckocore/start-rollup',
    npm: 'https://www.npmjs.com/package/start-rollup',
    website: 'https://github.com/tunnckocore/start-rollup#readme',
  },
  source: {
    github: 'tunnckocore/start-rollup',
    npm: 'start-rollup',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
