import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@wroud/vite-plugin-tsc',
  description: 'A Vite plugin that uses TypeScript\'s tsc to transpile TypeScript sources for seamless bundling.',
  version: '0.12.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
    'tsc',
    'transpiler',
    'bundler',
    'esmodules',
    'development',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Wroud/foundation',
    npm: 'https://www.npmjs.com/package/@wroud/vite-plugin-tsc',
  },
  stats: {
    downloads: {
      monthly: 3237,
      weekly: 756,
    },
  },
})
