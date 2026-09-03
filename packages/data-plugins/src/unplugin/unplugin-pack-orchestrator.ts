import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-pack-orchestrator',
  description: 'Universal plugin for auto-archiving dist folder to ZIP/TAR/7Z after build, with checksums and auto-rename support - powered by unplugin',
  version: '1.0.0',
  category: 'plugin',
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
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/wangkai000/unplugin-pack-orchestrator',
    npm: 'https://www.npmjs.com/package/unplugin-pack-orchestrator',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 0,
    },
  },
})
