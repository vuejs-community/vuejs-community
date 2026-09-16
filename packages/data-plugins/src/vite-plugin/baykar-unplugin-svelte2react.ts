import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@baykar/unplugin-svelte2react',
  description: 'Automatically turn Svelte components to React components.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'vite-plugin',
    'webpack',
    'rspack',
    'rollup',
    'rollup-plugin',
    'rolldown',
    'rolldown-plugin',
    'esbuild',
    'esbuild-plugin',
    'farm',
    'svelte',
    'svelte5',
    'react',
    'cross-framework',
    'svelte-component',
    'react-component',
    'svelte-to-react',
    'svelte2react',
  ],
  source: {
    github: 'canbaykar/svelte2react',
    npm: '@baykar/unplugin-svelte2react',
  },
  links: {
    github: 'https://github.com/canbaykar/svelte2react',
    npm: 'https://www.npmjs.com/package/@baykar/unplugin-svelte2react',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 3,
    },
  },
})
