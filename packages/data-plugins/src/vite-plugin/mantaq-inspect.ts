import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mantaq/inspect',
  description: 'Turn a Mantaq machine into a viz document: structure, handler explanations (AST), fuzz and test coverage. Vite plugin included.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'actor',
    'astro-integration',
    'diagram',
    'fuzzing',
    'mantaq',
    'state-machine',
    'typescript',
    'visualizer',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AndersCan/mantaq',
    npm: 'https://www.npmjs.com/package/@mantaq/inspect',
    website: 'https://anderscan.github.io/mantaq/',
  },
  source: {
    github: 'AndersCan/mantaq',
    npm: '@mantaq/inspect',
  },
})
