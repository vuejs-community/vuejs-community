import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-devpilot',
  description: 'Description.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  source: {
    github: 'zcf0508/unplugin-devpilot',
    npm: 'unplugin-devpilot',
  },
  links: {
    github: 'https://github.com/zcf0508/unplugin-devpilot',
    npm: 'https://www.npmjs.com/package/unplugin-devpilot',
    website: 'https://github.com/zcf0508/unplugin-devpilot#readme',
  },
  stats: {
    stars: 34,
    downloads: {
      monthly: 54,
      weekly: 22,
    },
  },
})
