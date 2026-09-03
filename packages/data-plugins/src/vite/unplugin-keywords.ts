import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-keywords',
  description: 'A build plugin for structural string literal minification and obfuscation (property mangling alternative)',
  version: '2.18.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'minification',
    'obfuscation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cueaz/unplugin-keywords',
    npm: 'https://www.npmjs.com/package/unplugin-keywords',
  },
  stats: {
    downloads: {
      monthly: 265,
      weekly: 45,
    },
  },
})
