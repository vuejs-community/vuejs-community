import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@spring-mox/vite-plugin-react',
  description: 'Vite plugin that generates type-safe routes from Spring WebMvc metadata (routes.json) using @spring-mox/base',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bun',
    'vite',
    'vite-plugin',
    'spring-boot',
    'spring',
  ],
  source: {
    npm: '@spring-mox/vite-plugin-react',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@spring-mox/vite-plugin-react',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 3,
    },
  },
})
