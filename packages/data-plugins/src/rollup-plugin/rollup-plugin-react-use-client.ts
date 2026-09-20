import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-react-use-client',
  description: 'Rollup plugin to transform use client directives following react specs.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'react',
    'react server components',
    'server components',
    'use client',
  ],
  links: {
    github: 'https://github.com/almadoro/react-just',
    npm: 'https://www.npmjs.com/package/rollup-plugin-react-use-client',
    website: 'https://github.com/almadoro/react-just#readme',
  },
  source: {
    github: 'almadoro/react-just',
    npm: 'rollup-plugin-react-use-client',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
