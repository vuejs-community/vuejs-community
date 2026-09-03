import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@spring-mox/vite-plugin-react',
  description: 'Vite plugin that generates type-safe routes from Spring WebMvc metadata (routes.json) using @spring-mox/base',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'bun',
    'vite',
    'vite-plugin',
    'spring-boot',
    'spring',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@spring-mox/vite-plugin-react',
  },
  stats: {
    downloads: {
      monthly: 225,
      weekly: 13,
    },
  },
})
