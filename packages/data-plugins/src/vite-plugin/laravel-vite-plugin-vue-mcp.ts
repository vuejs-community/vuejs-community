import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'laravel-vite-plugin-vue-mcp',
  description: 'MCP server for your Laravel + Vue app (component tree, state, routes and Pinia), auto-attached to your laravel-vite-plugin entry. Fork of vite-plugin-vue-mcp by Arlo (@webfansplz).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'vue',
    'laravel',
    'inertia',
    'mcp',
    'modelcontextprotocol',
  ],
  links: {
    github: 'https://github.com/Klipsik/laravel-vite-plugin-vue-mcp',
    npm: 'https://www.npmjs.com/package/laravel-vite-plugin-vue-mcp',
    website: 'https://github.com/Klipsik/laravel-vite-plugin-vue-mcp#readme',
  },
  source: {
    github: 'Klipsik/laravel-vite-plugin-vue-mcp',
    npm: 'laravel-vite-plugin-vue-mcp',
  },
})
