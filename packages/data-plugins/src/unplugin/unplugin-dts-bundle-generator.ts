import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dts-bundle-generator',
  description: 'DTS bundle generator for Unplugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'esbuild',
    'rolldown',
    'rollup',
    'vite',
    'dts',
    'bundle',
    'typescript',
  ],
  links: {
    github: 'https://github.com/f-lawe/unplugin-dts-bundle-generator',
    npm: 'https://www.npmjs.com/package/unplugin-dts-bundle-generator',
    website: 'https://github.com/f-lawe/unplugin-dts-bundle-generator#readme',
  },
  source: {
    github: 'f-lawe/unplugin-dts-bundle-generator',
    npm: 'unplugin-dts-bundle-generator',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 480,
      weekly: 29,
    },
  },
})
