import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-sucrase',
  description: 'A universal bundler plugin which compiles TypeScript, Flow, JSX, etc with Sucrase.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-sucrase',
    npm: 'https://www.npmjs.com/package/unplugin-sucrase',
    website: 'https://github.com/wzc520pyfm/unplugin-sucrase#readme',
  },
  source: {
    github: 'wzc520pyfm/unplugin-sucrase',
    npm: 'unplugin-sucrase',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
