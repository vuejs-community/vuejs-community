import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@reactre/preact',
  description: 'Preact\'s API and semantics on reactre\'s compiled templates: smaller and faster than Preact, with a JSX compiler.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'reactre',
    'preact',
    'react',
    'compat',
    'jsx',
    'templates',
    'vite-plugin',
    'rollup-plugin',
    'rolldown-plugin',
    'esbuild-plugin',
    'webpack-plugin',
    'rspack-plugin',
    'unplugin',
  ],
  links: {
    github: 'https://github.com/arafathusayn/reactre',
    npm: 'https://www.npmjs.com/package/@reactre/preact',
    website: 'https://github.com/arafathusayn/reactre/tree/main/packages/preact#readme',
  },
  source: {
    github: 'arafathusayn/reactre',
    npm: '@reactre/preact',
  },
})
