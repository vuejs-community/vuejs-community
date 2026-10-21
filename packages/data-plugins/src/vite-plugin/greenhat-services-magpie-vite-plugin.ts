import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@greenhat-services/magpie-vite-plugin',
  description: 'Uploads source maps to Magpie, records the release and its commits, and injects the release into your Vite build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'magpie',
    'vite',
    'vite-plugin',
    'sourcemaps',
    'release',
  ],
  links: {
    github: 'https://github.com/Greenhat-Services/magpie-js',
    npm: 'https://www.npmjs.com/package/@greenhat-services/magpie-vite-plugin',
    website: 'https://github.com/Greenhat-Services/magpie-js#readme',
  },
  source: {
    github: 'Greenhat-Services/magpie-js',
    npm: '@greenhat-services/magpie-vite-plugin',
  },
})
