import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fable',
  description: 'Compile F# with Fable from inside Vite, so a .fs file is just another module Vite can import.',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'dotnet',
    'f#',
    'fable',
    'fsharp',
    'hmr',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fable-compiler/vite-plugin-fable',
    npm: 'https://www.npmjs.com/package/vite-plugin-fable',
  },
  stats: {
    downloads: {
      monthly: 420,
      weekly: 122,
    },
  },
})
