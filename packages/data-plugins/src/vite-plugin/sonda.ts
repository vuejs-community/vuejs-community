import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sonda',
  description: 'Universal bundle analyzer and visualizer that works with most popular bundlers and frameworks.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'analyzer',
    'angular',
    'bundle',
    'devtools',
    'esbuild',
    'nextjs',
    'nuxt',
    'performance',
    'rolldown-plugin',
    'rollup-plugin',
    'rspack',
    'sveltekit',
    'visualizer',
    'vite-plugin',
    'webpack',
    'withastro',
  ],
  source: {
    github: 'filipsobol/sonda',
    npm: 'sonda',
  },
  links: {
    github: 'https://github.com/filipsobol/sonda',
    npm: 'https://www.npmjs.com/package/sonda',
    website: 'https://sonda.dev',
  },
  stats: {
    stars: 786,
    downloads: {
      monthly: 581396,
      weekly: 131044,
    },
  },
})
