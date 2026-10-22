import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tiptap',
  description: 'TipTap editor with auto-imported components, extensions and an image upload extension.',
  icon: '',
  category: 'nuxt',
  types: [
    'UI Components',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/modbender/nuxt-tiptap-editor',
    npm: 'https://npmjs.com/package/nuxt-tiptap-editor',
    website: 'https://nuxt-tiptap-editor.vercel.app',
  },
  source: {
    github: 'modbender/nuxt-tiptap-editor',
    npm: 'nuxt-tiptap-editor',
  },
})
