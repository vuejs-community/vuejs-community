import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@chrom-ar/collector-cli',
  description: 'Uploads your build\'s source maps to Collector. CLI and Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'source-maps',
    'sourcemaps',
    'error-tracking',
    'vite-plugin',
    'collector',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@chrom-ar/collector-cli',
  },
  source: {
    npm: '@chrom-ar/collector-cli',
  },
})
