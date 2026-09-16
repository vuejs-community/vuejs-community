import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-google-cloud-storage',
  description: 'Uploads build assets to a bucket on Google Cloud Storage',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'gcp',
    'google cloud storage',
    'upload',
    'bucket',
  ],
  source: {
    npm: 'rollup-plugin-google-cloud-storage',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-google-cloud-storage',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 759,
      weekly: 145,
    },
  },
})
