import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'cdn-cgi-image-dev',
  description: 'Emulate Cloudflare Image Transformations (/cdn-cgi/image) in local dev servers.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cloudflare',
    'image-transformations',
    'cdn-cgi',
    'vite-plugin',
    'eleventy',
    'dev-server',
    'browsersync',
  ],
  links: {
    github: 'https://github.com/TigersWay/cdn-cgi-image-dev',
    npm: 'https://www.npmjs.com/package/cdn-cgi-image-dev',
    website: 'https://github.com/TigersWay/cdn-cgi-image-dev/tree/main/packages/cdn-cgi-image-dev',
  },
  source: {
    github: 'TigersWay/cdn-cgi-image-dev',
    npm: 'cdn-cgi-image-dev',
  },
})
