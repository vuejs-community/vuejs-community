import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-typegpu',
  description: 'Build plugins for TypeGPU, enabling seamless JavaScript -> WGSL transpilation and improved debugging.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'babel-plugin',
    'gpgpu',
    'rollup-plugin',
    'shaders',
    'typegpu',
    'typescript',
    'unplugin',
    'vite-plugin',
    'webgpu',
    'wgpu',
    'wgsl',
  ],
  source: {
    github: 'software-mansion/TypeGPU',
    npm: 'unplugin-typegpu',
  },
  links: {
    github: 'https://github.com/software-mansion/TypeGPU',
    npm: 'https://www.npmjs.com/package/unplugin-typegpu',
    website: 'https://typegpu.com',
  },
  stats: {
    stars: 3197,
    downloads: {
      monthly: 322397,
      weekly: 76239,
    },
  },
})
