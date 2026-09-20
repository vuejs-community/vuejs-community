import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vui-rs/vite-plugin',
  description: 'Vite plugin to compile .vue SFCs for the vui-rs custom renderer — element tags, a TUI v-model transform, and style-block stripping.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sfc',
    'terminal',
    'tui',
    'vite',
    'vite-plugin',
    'vue',
    'vui-rs',
  ],
  links: {
    github: 'https://github.com/open-ai-sdk/vui-rs',
    npm: 'https://www.npmjs.com/package/@vui-rs/vite-plugin',
    website: 'https://github.com/open-ai-sdk/vui-rs#readme',
  },
  source: {
    github: 'open-ai-sdk/vui-rs',
    npm: '@vui-rs/vite-plugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
