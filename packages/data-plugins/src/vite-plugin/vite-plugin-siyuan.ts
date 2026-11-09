import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-siyuan',
  description: 'Vite plugin for SiYuan theme/plugin development: config injection, link to workspace, hot reload, verify and package',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'siyuan',
    'siyuan-theme',
    'siyuan-plugin',
    'vite-plugin',
    'hot-reload',
  ],
  links: {
    github: 'https://github.com/svchord/vite-plugin-siyuan',
    npm: 'https://www.npmjs.com/package/vite-plugin-siyuan',
    website: 'https://github.com/svchord/vite-plugin-siyuan#readme',
  },
  source: {
    github: 'svchord/vite-plugin-siyuan',
    npm: 'vite-plugin-siyuan',
  },
})
