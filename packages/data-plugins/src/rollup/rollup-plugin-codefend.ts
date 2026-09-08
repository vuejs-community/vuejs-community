import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-codefend',
  description: 'Rollup plugin for code obfuscation based on Codefend',
  icon: 'logos:rollupjs',
  version: '3.2.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'codefend',
    'obfuscate',
    'obfuscation',
    'obfuscator',
    'uglification',
    'uglify',
    'uglifier',
    'vue',
    'react',
    'angular',
    'svelte',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'Codefend/rollup-plugin-codefend',
    npm: 'rollup-plugin-codefend',
  },
  links: {
    github: 'https://github.com/Codefend/rollup-plugin-codefend',
    npm: 'https://www.npmjs.com/package/rollup-plugin-codefend',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 3,
    },
  },
})
