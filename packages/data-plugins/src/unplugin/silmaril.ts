import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'silmaril',
  description: 'Compile-time reactivity for JS',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'babel',
    'compiler',
    'reactivity',
    'rollup',
    'unplugin',
    'vite',
  ],
  links: {
    github: 'https://github.com/lxsmnsyc/silmaril',
    npm: 'https://www.npmjs.com/package/silmaril',
    website: 'https://github.com/lxsmnsyc/silmaril/tree/main/packages/silmaril',
  },
  source: {
    github: 'lxsmnsyc/silmaril',
    npm: 'silmaril',
  },
})
