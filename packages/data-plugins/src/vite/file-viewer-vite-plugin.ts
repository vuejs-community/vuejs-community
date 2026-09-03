import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@file-viewer/vite-plugin',
  description: 'Vite plugin for File Viewer on-demand renderer assembly, chunk planning, and offline asset deployment.',
  version: '3.0.0',
  category: 'plugin',
  tags: [
    'file-viewer',
    'vite-plugin',
    'renderer-preset',
    'document-preview',
    'on-demand-renderer',
    'document-viewer',
    'file-preview',
    'self-hosted',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/flyfish-dev/file-viewer',
    npm: 'https://www.npmjs.com/package/@file-viewer/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 30577,
      weekly: 12908,
    },
  },
})
