import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@modelschemas/vite',
  description: 'Vite plugin for modelschemas: pull selected JSON Schemas + generated TypeScript at dev time, verify offline at build time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'ai',
    'json-schema',
    'codegen',
    'schemas',
  ],
  source: {
    github: 'modelschemas/modelschemas',
    npm: '@modelschemas/vite',
  },
  links: {
    github: 'https://github.com/modelschemas/modelschemas',
    npm: 'https://www.npmjs.com/package/@modelschemas/vite',
    website: 'https://modelschemas.com',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 90,
      weekly: 2,
    },
  },
})
