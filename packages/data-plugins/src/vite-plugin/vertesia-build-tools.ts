import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vertesia/build-tools',
  description: 'Build tools for Vertesia projects - import transformers (skill / template / prompt / raw), esbuild widget bundler, vertesia-build CLI, and a Vite dev plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/vertesia/composableai',
    npm: 'https://www.npmjs.com/package/@vertesia/build-tools',
    website: 'https://github.com/vertesia/composableai#readme',
  },
  source: {
    github: 'vertesia/composableai',
    npm: '@vertesia/build-tools',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 2183,
      weekly: 550,
    },
  },
})
