import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fable',
  description: 'Compile F# with Fable from inside Vite, so a .fs file is just another module Vite can import.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dotnet',
    'f#',
    'fable',
    'fsharp',
    'hmr',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'fable-compiler/vite-plugin-fable',
    npm: 'vite-plugin-fable',
  },
  links: {
    github: 'https://github.com/fable-compiler/vite-plugin-fable',
    npm: 'https://www.npmjs.com/package/vite-plugin-fable',
    website: 'http://fable.io/vite-plugin-fable/',
  },
  stats: {
    stars: 45,
    downloads: {
      monthly: 1000,
      weekly: 213,
    },
  },
})
