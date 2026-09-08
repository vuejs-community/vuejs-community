import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-devpilot',
  description: 'Description.',
  icon: 'icon:dark-unplugin',
  version: '0.0.17',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'rollup',
    'rolldown',
    'esbuild',
    'farm',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'zcf0508/unplugin-devpilot',
    npm: 'unplugin-devpilot',
  },
  links: {
    github: 'https://github.com/zcf0508/unplugin-devpilot',
    npm: 'https://www.npmjs.com/package/unplugin-devpilot',
  },
  stats: {
    downloads: {
      monthly: 84,
      weekly: 18,
    },
  },
})
