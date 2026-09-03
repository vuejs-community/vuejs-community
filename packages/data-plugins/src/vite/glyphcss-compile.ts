import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@glyphcss/compile',
  description: 'Compile 3D meshes to static glyphcss ASCII at build time — a Vite plugin, a CLI, and a Node API. Zero-runtime <pre> output for any static pipeline.',
  version: '0.1.6',
  category: 'plugin',
  tags: [
    'glyphcss',
    'ascii',
    '3d',
    'compile',
    'vite',
    'vite-plugin',
    'static',
    'ssg',
    'cli',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/apresmoi/glyphcss',
    npm: 'https://www.npmjs.com/package/@glyphcss/compile',
  },
  stats: {
    downloads: {
      monthly: 522,
      weekly: 475,
    },
  },
})
