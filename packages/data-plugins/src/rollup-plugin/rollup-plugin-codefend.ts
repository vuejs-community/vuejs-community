import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-codefend',
  description: 'Rollup plugin for code obfuscation based on Codefend',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  links: {
    github: 'https://github.com/Codefend/rollup-plugin-codefend',
    npm: 'https://www.npmjs.com/package/rollup-plugin-codefend',
    website: 'https://github.com/Codefend/rollup-plugin-codefend.git',
  },
  source: {
    github: 'Codefend/rollup-plugin-codefend',
    npm: 'rollup-plugin-codefend',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 22,
      weekly: 5,
    },
  },
})
