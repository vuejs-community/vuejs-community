import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-keep-console',
  description: 'Production console policy for Vite: remove, keep, report, or fail builds on console calls with Babel/OXC backends.',
  icon: 'logos:vite-icon',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'console',
    'console-policy',
    'remove-console',
    'strip-console',
    'build-tool',
    'production',
    'typescript',
    'javascript',
    'babel',
    'oxc',
    'logging',
    'ci',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'biubiukam/vite-plugin-keep-console',
    npm: 'vite-plugin-keep-console',
  },
  links: {
    github: 'https://github.com/biubiukam/vite-plugin-keep-console',
    npm: 'https://www.npmjs.com/package/vite-plugin-keep-console',
  },
  stats: {
    downloads: {
      monthly: 107,
      weekly: 4,
    },
  },
})
