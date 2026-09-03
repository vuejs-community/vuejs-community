import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vui-rs/vite-plugin',
  description: 'Vite plugin to compile .vue SFCs for the vui-rs custom renderer — element tags, a TUI v-model transform, and style-block stripping.',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'sfc',
    'terminal',
    'tui',
    'vite',
    'vite-plugin',
    'vue',
    'vui-rs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/open-ai-sdk/vui-rs',
    npm: 'https://www.npmjs.com/package/@vui-rs/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 6,
    },
  },
})
