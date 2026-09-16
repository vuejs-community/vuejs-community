import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@file-viewer/vite-plugin',
  description: 'Vite plugin for File Viewer on-demand renderer assembly, chunk planning, and offline asset deployment.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'flyfish-dev/file-viewer',
    npm: '@file-viewer/vite-plugin',
  },
  links: {
    github: 'https://github.com/flyfish-dev/file-viewer',
    npm: 'https://www.npmjs.com/package/@file-viewer/vite-plugin',
    website: 'https://doc.file-viewer.app/guide/on-demand-renderers',
  },
  stats: {
    stars: 2331,
    downloads: {
      monthly: 38106,
      weekly: 8055,
    },
  },
})
