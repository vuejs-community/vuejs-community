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
    github: 'https://github.com/chrom-ar/collector-js',
    npm: 'https://www.npmjs.com/package/@chrom-ar/collector-cli',
    website: 'https://github.com/chrom-ar/collector-js#readme',
  },
  source: {
    github: 'chrom-ar/collector-js',
    npm: '@chrom-ar/collector-cli',
  },
})
