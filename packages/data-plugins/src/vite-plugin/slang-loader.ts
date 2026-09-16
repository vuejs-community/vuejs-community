import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'slang-loader',
  description: 'Compile Slang shaders to WGSL at build time, for Vite, webpack, Rollup, esbuild and more.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'AbdBarho/slang-loader',
    npm: 'slang-loader',
  },
  links: {
    github: 'https://github.com/AbdBarho/slang-loader',
    npm: 'https://www.npmjs.com/package/slang-loader',
    website: 'https://github.com/AbdBarho/slang-loader#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 348,
      weekly: 9,
    },
  },
})
