import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@coheryn/coherynui-vite-plugin',
  description: 'Official Vite plugin for CoherynUI CSS Engine: On-demand compilation, instant HMR, and virtual CSS module resolution',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'coherynui',
    'vite-plugin',
    'css',
    'compiler',
    'hmr',
    'cascade-layers',
  ],
  links: {
    github: 'https://github.com/Coheryn/coheryn-ui',
    npm: 'https://www.npmjs.com/package/@coheryn/coherynui-vite-plugin',
    website: 'https://coheryntech.com/products/coheryn-ui',
  },
  source: {
    github: 'Coheryn/coheryn-ui',
    npm: '@coheryn/coherynui-vite-plugin',
  },
})
