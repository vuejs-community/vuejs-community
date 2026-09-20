import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-legacy-swc',
  description: 'Provides legacy browsers support for the production build with SWC',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'legacy',
    'swc',
  ],
  links: {
    github: 'https://github.com/CyanSalt/vite-plugin-legacy-swc',
    npm: 'https://www.npmjs.com/package/vite-plugin-legacy-swc',
    website: 'https://github.com/CyanSalt/vite-plugin-legacy-swc#readme',
  },
  source: {
    github: 'CyanSalt/vite-plugin-legacy-swc',
    npm: 'vite-plugin-legacy-swc',
  },
  stats: {
    stars: 70,
    downloads: {
      monthly: 51877,
      weekly: 7900,
    },
  },
})
