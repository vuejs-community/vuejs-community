import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@scoperat/vite-plugin',
  description: 'Uploads your build\'s source maps to ScopeRat, stamped with debug IDs, so error stack traces show your original code. For Vite, webpack and Next.js, Rspack, Rollup and esbuild',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'webpack',
    'rspack',
    'rollup',
    'esbuild',
    'unplugin',
    'source-maps',
    'sourcemaps',
    'debug-id',
    'error-tracking',
    'stack-trace',
    'scoperat',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@scoperat/vite-plugin',
  },
  source: {
    npm: '@scoperat/vite-plugin',
  },
})
