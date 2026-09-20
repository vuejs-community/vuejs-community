import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-atscript',
  description: 'Atscript: Configuration and build plugins.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'annotations',
    'atscript',
    'esbuild-plugin',
    'rolldown-plugin',
    'rollup-plugin',
    'rspack-plugin',
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
  ],
  links: {
    github: 'https://github.com/moostjs/atscript',
    npm: 'https://www.npmjs.com/package/unplugin-atscript',
    website: 'https://github.com/moostjs/atscript/tree/main/packages/unplugin#readme',
  },
  source: {
    github: 'moostjs/atscript',
    npm: 'unplugin-atscript',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 315,
      weekly: 24,
    },
  },
})
