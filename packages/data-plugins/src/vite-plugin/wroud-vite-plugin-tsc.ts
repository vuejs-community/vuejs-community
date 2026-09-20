import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wroud/vite-plugin-tsc',
  description: 'A Vite plugin that uses TypeScript\'s tsc (or the native tsgo compiler) to transpile and type check TypeScript sources for seamless bundling.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
    'tsc',
    'tsgo',
    'transpiler',
    'bundler',
    'esmodules',
    'development',
  ],
  links: {
    github: 'https://github.com/Wroud/foundation',
    npm: 'https://www.npmjs.com/package/@wroud/vite-plugin-tsc',
    website: 'https://wroud.dev',
  },
  source: {
    github: 'Wroud/foundation',
    npm: '@wroud/vite-plugin-tsc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2469,
      weekly: 445,
    },
  },
})
