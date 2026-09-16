import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-strip-whitespace',
  description: 'Unplugin to strip inter-node whitespace in Astro and Svelte templates (Vite/Rollup/Webpack/Rspack/etc).',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'rollup',
    'webpack',
    'rspack',
    'esbuild',
    'farm',
    'nuxt',
    'astro',
    'svelte',
    'whitespace',
    'minify',
  ],
  source: {
    github: 'SegaraRai/strip-whitespace',
    npm: 'unplugin-strip-whitespace',
  },
  links: {
    github: 'https://github.com/SegaraRai/strip-whitespace',
    npm: 'https://www.npmjs.com/package/unplugin-strip-whitespace',
    website: 'https://github.com/SegaraRai/strip-whitespace#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 95,
      weekly: 2,
    },
  },
})
