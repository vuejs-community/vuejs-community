import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'css-var-extract-plugin',
  description: 'Use CSS vars type-safely for CSS-in-JS',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'css',
    'css-in-js',
    'react',
    'typescript',
    'codegen',
    'generation',
    'unplugin',
    'vite',
    'rspack',
    'webpack',
  ],
  source: {
    github: 'sya-ri/css-var-extract',
    npm: 'css-var-extract-plugin',
  },
  links: {
    github: 'https://github.com/sya-ri/css-var-extract',
    npm: 'https://www.npmjs.com/package/css-var-extract-plugin',
    website: 'https://github.com/sya-ri/css-var-extract#readme',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 33,
      weekly: 3,
    },
  },
})
