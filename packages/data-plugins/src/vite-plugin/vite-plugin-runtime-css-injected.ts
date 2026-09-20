import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-runtime-css-injected',
  description: 'Vite build plugins: runtime CSS injection & legacy import.meta.url shim (Rolldown)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'rolldown',
    'import-meta-url',
    'css-inject',
    'css-in-js',
    'runtime-css-injected',
    'runtime-css-injected-plugin',
  ],
  links: {
    github: 'https://github.com/bryanlee-hao/vite-plugin-runtime-css-injected',
    npm: 'https://www.npmjs.com/package/vite-plugin-runtime-css-injected',
    website: 'https://github.com/bryanlee-hao/vite-plugin-runtime-css-injected#readme',
  },
  source: {
    github: 'bryanlee-hao/vite-plugin-runtime-css-injected',
    npm: 'vite-plugin-runtime-css-injected',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
