import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'kubi-source-stamp',
  description: 'Stamps where each JSX element and component was written into a production React build, as opaque ids Kubi resolves against your repo. No paths and nothing in the HTML.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'kubi',
    'react',
    'vite-plugin',
    'webpack-loader',
    'source-map',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/kubi-source-stamp',
  },
  source: {
    npm: 'kubi-source-stamp',
  },
})
