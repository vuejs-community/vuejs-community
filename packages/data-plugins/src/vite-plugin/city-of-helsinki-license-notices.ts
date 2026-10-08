import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@city-of-helsinki/license-notices',
  description: 'Third-party license notices for the production build of a Vite application',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'license',
    'third-party-notices',
    'open-source-compliance',
  ],
  links: {
    github: 'https://github.com/City-of-Helsinki/license-notices',
    npm: 'https://www.npmjs.com/package/@city-of-helsinki/license-notices',
    website: 'https://github.com/City-of-Helsinki/license-notices#readme',
  },
  source: {
    github: 'City-of-Helsinki/license-notices',
    npm: '@city-of-helsinki/license-notices',
  },
})
