import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-md2svelte',
  description: 'A Vite plugin that converts Markdown files to Svelte components with frontmatter support, custom components, and plugin extensibility',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'frontmatter',
    'markdown',
    'md',
    'rehype',
    'remark',
    'svelte',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/CatBraaain/vite-plugin-md2svelte',
    npm: 'https://www.npmjs.com/package/vite-plugin-md2svelte',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 0,
    },
  },
})
