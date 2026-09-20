import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-manifest-json',
  description: 'Rollup plugin to generate a manifest.json file used to tell the browser about your web app.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'plugin',
    'manifest.json',
    'manifest',
    'pwa',
  ],
  links: {
    github: 'https://github.com/adamzerella/rollup-plugin-manifest-json',
    npm: 'https://www.npmjs.com/package/rollup-plugin-manifest-json',
    website: 'https://github.com/azerella/rollup-plugin-manifest-json#readme',
  },
  source: {
    github: 'adamzerella/rollup-plugin-manifest-json',
    npm: 'rollup-plugin-manifest-json',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 696,
      weekly: 105,
    },
  },
})
