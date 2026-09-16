import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-unity-jslib',
  description: 'Rollup plugin for converting javascript library into Unity .jslib. file',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'unity',
    'jslib',
    'rollup',
    'rollup-plugin',
  ],
  source: {
    github: 'ziomagic/rollup-plugin-unity-jslib',
    npm: 'rollup-plugin-unity-jslib',
  },
  links: {
    github: 'https://github.com/ziomagic/rollup-plugin-unity-jslib',
    npm: 'https://www.npmjs.com/package/rollup-plugin-unity-jslib',
    website: 'https://github.com/ziomagic/rollup-plugin-unity-jslib#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
