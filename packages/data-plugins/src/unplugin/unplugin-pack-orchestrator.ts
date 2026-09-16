import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-pack-orchestrator',
  description: 'Universal plugin for auto-archiving dist folder to ZIP/TAR/7Z after build, with checksums and auto-rename support - powered by unplugin',
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
    'esbuild',
    'plugin',
    'archive',
    'zip',
    'tar',
    '7z',
    'pack',
  ],
  source: {
    github: 'wangkai000/unplugin-pack-orchestrator',
    npm: 'unplugin-pack-orchestrator',
  },
  links: {
    github: 'https://github.com/wangkai000/unplugin-pack-orchestrator',
    npm: 'https://www.npmjs.com/package/unplugin-pack-orchestrator',
    website: 'https://github.com/wangkai000/unplugin-pack-orchestrator#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
