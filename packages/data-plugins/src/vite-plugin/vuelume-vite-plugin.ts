import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vuelume/vite-plugin',
  description: 'Dev-only Vite plugin: canvas ↔ source instrumentation, local editing API and the visual editor UI.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vue',
    'vite',
    'vite-plugin',
    'visual-editor',
    'page-builder',
    'devtools',
    'drag-and-drop',
  ],
  links: {
    github: 'https://github.com/kyotodevIndie/vuelume',
    npm: 'https://www.npmjs.com/package/@vuelume/vite-plugin',
    website: 'https://github.com/kyotodevIndie/vuelume#readme',
  },
  source: {
    github: 'kyotodevIndie/vuelume',
    npm: '@vuelume/vite-plugin',
  },
})
