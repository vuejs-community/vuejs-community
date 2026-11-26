import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@luoxuanpeng/vite-plugin-svg-icons',
  description: 'Patched fork of vite-plugin-svg-icons: load hook early-returns for non-sprite modules to avoid full-module execution. Fork of https://github.com/anncwb/vite-plugin-svg-icons',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'svg',
    'sprite',
    'svgo',
    'vben',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@luoxuanpeng/vite-plugin-svg-icons',
    website: 'https://github.com/anncwb/vite-plugin-svg-icons/tree/master/#readme',
  },
  source: {
    npm: '@luoxuanpeng/vite-plugin-svg-icons',
  },
})
