import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-post-obfuscator',
  description: 'The Rollup plugin post obfuscates JavaScript',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'obfuscator',
    'supports dynamic import obfuscation',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'KongYanHHHH/rollup-plugin-post-obfuscator',
    npm: 'rollup-plugin-post-obfuscator',
  },
  links: {
    github: 'https://github.com/KongYanHHHH/rollup-plugin-post-obfuscator',
    npm: 'https://www.npmjs.com/package/rollup-plugin-post-obfuscator',
  },
  stats: {
    downloads: {
      monthly: 215,
      weekly: 33,
    },
  },
})
