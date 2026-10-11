import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aaqiljamal/visual-editor-vite',
  description: 'Vite plugin for visual-editor: stamps JSX with source ids before @vitejs/plugin-react, serves the AST-writer API as dev-server middleware, and auto-mounts the overlay. Works with Vite + React, React Router v7 (framework mode), TanStack Start and Astro+Rea',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'visual-editor',
    'vite',
    'vite-plugin',
    'react',
    'tailwind',
  ],
  links: {
    github: 'https://github.com/The-Design-Alchemist/visual-editor',
    npm: 'https://www.npmjs.com/package/@aaqiljamal/visual-editor-vite',
    website: 'https://github.com/The-Design-Alchemist/visual-editor#readme',
  },
  source: {
    github: 'The-Design-Alchemist/visual-editor',
    npm: '@aaqiljamal/visual-editor-vite',
  },
})
