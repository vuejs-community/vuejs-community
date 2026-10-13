import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@drawcall/vite',
  description: 'Every Drawcall Vite plugin in one.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'drawcall',
    'glts',
    'three',
  ],
  links: {
    github: 'https://github.com/drawcall-ai/vite',
    npm: 'https://www.npmjs.com/package/@drawcall/vite',
    website: 'https://github.com/drawcall-ai/vite#readme',
  },
  source: {
    github: 'drawcall-ai/vite',
    npm: '@drawcall/vite',
  },
})
