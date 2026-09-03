import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mdscript/rollup-plugin',
  description: 'Rollup plugin for importing MDS templates as ES modules',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'mds',
    'rollup',
    'rollup-plugin',
    'markdown',
    'template',
    'llm',
    'prompt',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/dean0x/mdscript',
    npm: 'https://www.npmjs.com/package/@mdscript/rollup-plugin',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 4,
    },
  },
})
