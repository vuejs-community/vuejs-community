import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@blockquote/rollup-plugin-externalize-source-dependencies',
  description: 'A Rollup plugin that allows for the replacement of dependencies with external dependencies without requiring users to manually mark them as external through the \'external\' option.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'external',
    'resolveId',
    'source',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/oscarmarina/rollup-plugin-externalize-source-dependencies',
    npm: 'https://www.npmjs.com/package/@blockquote/rollup-plugin-externalize-source-dependencies',
  },
  stats: {
    downloads: {
      monthly: 786,
      weekly: 103,
    },
  },
})
