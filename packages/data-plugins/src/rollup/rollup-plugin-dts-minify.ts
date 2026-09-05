import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dts-minify',
  description: 'Small Rollup plugin that runs `dts-minify` on `.d.ts` declarations',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'typescript',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/RashingPro/rollup-plugin-dts-minify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dts-minify',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 22,
    },
  },
})
