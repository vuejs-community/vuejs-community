import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yamachu/vite-plugin-dotnet-wasm',
  description: 'Vite plugin for .NET WebAssembly projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'dotnet',
    'vite',
  ],
  links: {
    github: 'https://github.com/yamachu/vite-plugin-dotnet-wasm',
    npm: 'https://www.npmjs.com/package/@yamachu/vite-plugin-dotnet-wasm',
    website: 'https://github.com/yamachu/vite-plugin-dotnet-wasm#readme',
  },
  source: {
    github: 'yamachu/vite-plugin-dotnet-wasm',
    npm: '@yamachu/vite-plugin-dotnet-wasm',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 584,
      weekly: 21,
    },
  },
})
