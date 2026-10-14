import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-scriptc',
  description: 'scriptc native compilation for any bundler via unplugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'scriptc',
    'unplugin',
    'vite',
    'rollup',
    'webpack',
    'esbuild',
    'rolldown',
    'native',
    'aot',
    'compiler',
  ],
  links: {
    github: 'https://github.com/sigilco/unplugin-scriptc',
    npm: 'https://www.npmjs.com/package/unplugin-scriptc',
    website: 'https://github.com/sigilco/unplugin-scriptc#readme',
  },
  source: {
    github: 'sigilco/unplugin-scriptc',
    npm: 'unplugin-scriptc',
  },
})
