import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mdscript/rollup-plugin',
  description: 'Rollup plugin for importing MDS templates as ES modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'mds',
    'rollup',
    'rollup-plugin',
    'markdown',
    'template',
    'llm',
    'prompt',
  ],
  source: {
    github: 'dean0x/mdscript',
    npm: '@mdscript/rollup-plugin',
  },
  links: {
    github: 'https://github.com/dean0x/mdscript',
    npm: 'https://www.npmjs.com/package/@mdscript/rollup-plugin',
    website: 'https://github.com/dean0x/mdscript#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 99,
      weekly: 47,
    },
  },
})
