import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@blockquote/rollup-plugin-externalize-source-dependencies',
  description: 'A Rollup plugin that allows for the replacement of dependencies with external dependencies without requiring users to manually mark them as external through the \'external\' option.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'external',
    'resolveId',
    'source',
    'rollup-plugin',
  ],
  source: {
    github: 'oscarmarina/rollup-plugin-externalize-source-dependencies',
    npm: '@blockquote/rollup-plugin-externalize-source-dependencies',
  },
  links: {
    github: 'https://github.com/oscarmarina/rollup-plugin-externalize-source-dependencies',
    npm: 'https://www.npmjs.com/package/@blockquote/rollup-plugin-externalize-source-dependencies',
    website: 'https://github.com/oscarmarina/rollup-plugin-externalize-source-dependencies',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 550,
      weekly: 186,
    },
  },
})
