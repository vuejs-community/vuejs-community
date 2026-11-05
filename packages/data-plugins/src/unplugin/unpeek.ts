import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unpeek',
  description: 'Zero-config, call-graph-aware polymorphic AST obfuscation and passive runtime anti-tamper with <2% CPU overhead.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'obfuscator',
    'anti-debug',
    'anti-tamper',
    'devtools',
    'sourcemap',
    'ast',
    'security',
    'unplugin',
    'vite',
    'nextjs',
    'webpack',
  ],
  links: {
    github: 'https://github.com/Woffluon/unpeek',
    npm: 'https://www.npmjs.com/package/unpeek',
    website: 'https://woffluon.github.io/unpeek',
  },
  source: {
    github: 'Woffluon/unpeek',
    npm: 'unpeek',
  },
})
