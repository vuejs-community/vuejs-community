import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@surgijs/compiler',
  description: 'SurgiJS JSX compiler with Vite, Rollup and esbuild plugins.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'surgijs',
    'jsx',
    'compiler',
    'vite-plugin',
    'esbuild-plugin',
  ],
  links: {
    github: 'https://github.com/SurgiJS/surgijs',
    npm: 'https://www.npmjs.com/package/@surgijs/compiler',
    website: 'https://surgijs.github.io/surgijs/',
  },
  source: {
    github: 'SurgiJS/surgijs',
    npm: '@surgijs/compiler',
  },
})
