import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-unity-jslib',
  description: 'Rollup plugin for converting javascript library into Unity .jslib. file',
  icon: 'logos:rollupjs',
  version: '0.2.6',
  category: 'plugin',
  tags: [
    'unity',
    'jslib',
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'ziomagic/rollup-plugin-unity-jslib',
    npm: 'rollup-plugin-unity-jslib',
  },
  links: {
    github: 'https://github.com/ziomagic/rollup-plugin-unity-jslib',
    npm: 'https://www.npmjs.com/package/rollup-plugin-unity-jslib',
  },
  stats: {
    downloads: {
      monthly: 52,
      weekly: 0,
    },
  },
})
