import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-object-3d',
  description: 'Import 3d objects with obj, mtl and textures whilte importing .obj file',
  icon: 'icon:dark-unplugin',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'obj',
    'mtl',
    'textures',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'm0ksem/unplugin-object-3d',
    npm: 'unplugin-object-3d',
  },
  links: {
    github: 'https://github.com/m0ksem/unplugin-object-3d',
    npm: 'https://www.npmjs.com/package/unplugin-object-3d',
  },
  stats: {
    downloads: {
      monthly: 41,
      weekly: 7,
    },
  },
})
