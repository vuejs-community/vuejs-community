import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@modelschemas/vite',
  description: 'Vite plugin for modelschemas: pull selected JSON Schemas + generated TypeScript at dev time, verify offline at build time.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'ai',
    'json-schema',
    'codegen',
    'schemas',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/modelschemas/modelschemas',
    npm: 'https://www.npmjs.com/package/@modelschemas/vite',
  },
  stats: {
    downloads: {
      monthly: 73,
      weekly: 73,
    },
  },
})
