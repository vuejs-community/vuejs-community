import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@todde.tv/gltf-type-toolkit',
  description: 'This plugin generates type-safe glTF file representations in TypeScript and optimizes the loading and bundling of models in web projects, while being bundler-agnostic (Vite, Rollup, Webpack, esbuild, Rspack, ...).',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'typescript',
    'webpack',
    'web',
    'generator',
    'rollup',
    'farm',
    'three-js',
    'threejs',
    'gltf',
    'gltf2',
    'rolldown',
    'vite',
    'esbuild',
    'rspack',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/toddeTV/gltf-type-toolkit',
    npm: 'https://www.npmjs.com/package/@todde.tv/gltf-type-toolkit',
  },
  stats: {
    downloads: {
      monthly: 44,
      weekly: 20,
    },
  },
})
