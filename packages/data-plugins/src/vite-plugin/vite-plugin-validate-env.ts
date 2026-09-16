import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-validate-env',
  description: 'Vite plugin to validate environment variables against any standard schema library (Zod, Valibot, ArkType).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'env',
    'validation',
    'standard-schema',
  ],
  source: {
    github: 'handtrix/vite-plugin-validate-env',
    npm: 'vite-plugin-validate-env',
  },
  links: {
    github: 'https://github.com/handtrix/vite-plugin-validate-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-validate-env',
    website: 'https://github.com/handtrix/vite-plugin-validate-env#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 189,
      weekly: 40,
    },
  },
})
