import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@larabug/vite',
  description: 'Vite plugin that uploads source maps to LaraBug, stamps every error with the build\'s release, and sends the lockfile for vulnerability scanning',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'larabug',
    'error-tracking',
    'vite',
    'vite-plugin',
    'sourcemaps',
    'laravel',
  ],
  links: {
    github: 'https://github.com/LaraBug/larabug-js',
    npm: 'https://www.npmjs.com/package/@larabug/vite',
    website: 'https://github.com/LaraBug/larabug-js#readme',
  },
  source: {
    github: 'LaraBug/larabug-js',
    npm: '@larabug/vite',
  },
})
