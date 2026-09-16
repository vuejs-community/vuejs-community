import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@glyphcss/compile',
  description: 'Compile 3D meshes to static glyphcss ASCII at build time — a Vite plugin, a CLI, and a Node API. Zero-runtime <pre> output for any static pipeline.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'apresmoi/glyphcss',
    npm: '@glyphcss/compile',
  },
  links: {
    github: 'https://github.com/apresmoi/glyphcss',
    npm: 'https://www.npmjs.com/package/@glyphcss/compile',
    website: 'https://github.com/apresmoi/glyphcss#readme',
  },
  stats: {
    stars: 211,
    downloads: {
      monthly: 780,
      weekly: 44,
    },
  },
})
