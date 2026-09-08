import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-react-use-client',
  description: 'Rollup plugin to transform use client directives following react specs.',
  icon: 'logos:rollupjs',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'react',
    'react server components',
    'server components',
    'use client',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'almadoro/react-just',
    npm: 'rollup-plugin-react-use-client',
  },
  links: {
    github: 'https://github.com/almadoro/react-just',
    npm: 'https://www.npmjs.com/package/rollup-plugin-react-use-client',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
