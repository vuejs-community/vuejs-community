import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@open-probe/unplugin',
  description: 'Build-tool plugin (Vite/Webpack/Rspack/esbuild) that injects the open-probe runtime in development mode.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'open-probe',
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
    'rspack-plugin',
    'esbuild-plugin',
  ],
  links: {
    github: 'https://github.com/wzc520pyfm/open-probe',
    npm: 'https://www.npmjs.com/package/@open-probe/unplugin',
    website: 'https://github.com/wzc520pyfm/open-probe/tree/main/packages/unplugin#readme',
  },
  source: {
    github: 'wzc520pyfm/open-probe',
    npm: '@open-probe/unplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 2,
    },
  },
})
