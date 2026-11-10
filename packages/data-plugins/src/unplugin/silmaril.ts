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
    'compiler',
    'reactivity',
    'rollup',
    'unplugin',
    'vite',
  ],
  links: {
    github: 'https://github.com/lxsmnsyc/silmaril',
    npm: 'https://www.npmjs.com/package/silmaril',
    website: 'https://silmaril-docs.vercel.app/',
  },
  source: {
    github: 'lxsmnsyc/silmaril',
    npm: 'silmaril',
  },
})
