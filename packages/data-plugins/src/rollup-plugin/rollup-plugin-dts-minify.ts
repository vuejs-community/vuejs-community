import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dts-minify',
  description: 'Small Rollup plugin that runs `dts-minify` on `.d.ts` declarations',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'typescript',
    'minify',
  ],
  links: {
    github: 'https://github.com/RashingPro/rollup-plugin-dts-minify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dts-minify',
    website: 'https://github.com/RashingPro/rollup-plugin-dts-minify#readme',
  },
  source: {
    github: 'RashingPro/rollup-plugin-dts-minify',
    npm: 'rollup-plugin-dts-minify',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 30,
      weekly: 1,
    },
  },
})
