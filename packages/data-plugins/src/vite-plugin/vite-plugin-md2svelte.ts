import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-md2svelte',
  description: 'A Vite plugin that converts Markdown files to Svelte components with frontmatter support, custom components, and plugin extensibility',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'CatBraaain/vite-plugin-md2svelte',
    npm: 'vite-plugin-md2svelte',
  },
  links: {
    github: 'https://github.com/CatBraaain/vite-plugin-md2svelte',
    npm: 'https://www.npmjs.com/package/vite-plugin-md2svelte',
    website: 'https://github.com/CatBraaain/vite-plugin-md2svelte#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
