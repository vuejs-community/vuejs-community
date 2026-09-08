import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dotnet-wasm',
  description: 'Mount .NET WebAssembly output as virtual modules for Vite, Webpack, Rollup, esbuild, Rspack, Rsbuild, Rolldown, Farm, and Bun.',
  icon: 'icon:dark-unplugin',
  version: '1.5.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'rolldown',
    'esbuild',
    'rspack',
    'rsbuild',
    'farm',
    'bun',
    'dotnet',
    'webassembly',
    'wasm',
    'staticwebassets',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'ArcadeMode/unplugin-dotnet-wasm',
    npm: 'unplugin-dotnet-wasm',
  },
  links: {
    github: 'https://github.com/ArcadeMode/unplugin-dotnet-wasm',
    npm: 'https://www.npmjs.com/package/unplugin-dotnet-wasm',
  },
  stats: {
    downloads: {
      monthly: 1366,
      weekly: 34,
    },
  },
})
