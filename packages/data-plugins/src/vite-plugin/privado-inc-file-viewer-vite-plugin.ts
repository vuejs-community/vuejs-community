import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@privado-inc/file-viewer-vite-plugin',
  description: 'Vite plugin for @privado-inc/file-viewer: renderer assembly and offline asset deployment. Built from flyfish-dev/file-viewer v3.1.2 @file-viewer/vite-plugin, upstream source unmodified.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'file-viewer',
    'vite-plugin',
    'document-preview',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@privado-inc/file-viewer-vite-plugin',
  },
  source: {
    npm: '@privado-inc/file-viewer-vite-plugin',
  },
})
