import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vertesia/build-tools',
  description: 'Build tools for Vertesia projects - import transformers (skill / template / prompt / raw), esbuild widget bundler, vertesia-build CLI, and a Vite dev plugin',
  version: '1.4.1',
  category: 'plugin',
  tags: [
    'vertesia',
    'vite',
    'vite-plugin',
    'build-tools',
    'imports',
    'transform',
    'esbuild',
    'skill',
    'markdown',
    'frontmatter',
    'widget',
    'bundler',
    'zod',
    'validation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vertesia/composableai',
    npm: 'https://www.npmjs.com/package/@vertesia/build-tools',
  },
  stats: {
    downloads: {
      monthly: 1510,
      weekly: 467,
    },
  },
})
