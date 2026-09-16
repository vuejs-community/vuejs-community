import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-keywords',
  description: 'A build plugin for structural string literal minification and obfuscation (property mangling alternative)',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'minification',
    'obfuscation',
  ],
  source: {
    github: 'cueaz/unplugin-keywords',
    npm: 'unplugin-keywords',
  },
  links: {
    github: 'https://github.com/cueaz/unplugin-keywords',
    npm: 'https://www.npmjs.com/package/unplugin-keywords',
    website: 'https://github.com/cueaz/unplugin-keywords#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 248,
      weekly: 75,
    },
  },
})
