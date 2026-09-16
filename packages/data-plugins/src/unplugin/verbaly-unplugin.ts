import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@verbaly/unplugin',
  description: 'Verbaly for webpack, Rollup, esbuild and Rspack: extraction, virtual modules and build gate via unplugin.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'i18n',
    'unplugin',
    'webpack',
    'rollup',
    'esbuild',
    'rspack',
    'verbaly',
  ],
  source: {
    github: 'AronSoto/verbaly',
    npm: '@verbaly/unplugin',
  },
  links: {
    github: 'https://github.com/AronSoto/verbaly',
    npm: 'https://www.npmjs.com/package/@verbaly/unplugin',
    website: 'https://verbaly-web.vercel.app/docs/frameworks/vite#unplugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2536,
      weekly: 875,
    },
  },
})
