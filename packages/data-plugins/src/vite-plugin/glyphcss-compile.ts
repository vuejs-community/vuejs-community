import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@glyphcss/compile',
  description: 'Compile 3D meshes, Mermaid diagrams and data charts to text or HTML with the glyphcss CLI, Node API and Vite plugin.',
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
    'diagram',
    'chart',
    'mermaid',
  ],
  links: {
    github: 'https://github.com/apresmoi/glyphcss',
    npm: 'https://www.npmjs.com/package/@glyphcss/compile',
    website: 'https://glyphcss.com/',
  },
  source: {
    github: 'apresmoi/glyphcss',
    npm: '@glyphcss/compile',
  },
  stats: {
    stars: 211,
    downloads: {
      monthly: 780,
      weekly: 44,
    },
  },
})
