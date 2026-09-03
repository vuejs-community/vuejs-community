import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-sucrase',
  description: 'A universal bundler plugin which compiles TypeScript, Flow, JSX, etc with Sucrase.',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-sucrase',
    npm: 'https://www.npmjs.com/package/unplugin-sucrase',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
