import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'slang-loader',
  description: 'Compile Slang shaders to WGSL at build time, for Vite, webpack, Rollup, esbuild and more.',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'slang',
    'wgsl',
    'webgpu',
    'shader',
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
    'rollup-plugin',
    'esbuild-plugin',
    'rspack-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AbdBarho/slang-loader',
    npm: 'https://www.npmjs.com/package/slang-loader',
  },
  stats: {
    downloads: {
      monthly: 613,
      weekly: 16,
    },
  },
})
