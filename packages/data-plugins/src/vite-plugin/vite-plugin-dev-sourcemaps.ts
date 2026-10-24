import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dev-sourcemaps',
  description: 'Externalize Vite dev-server inline source maps into separate .map responses to avoid Chrome/Edge DevTools freezes (vitejs/vite#23549).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sourcemap',
    'source-map',
    'dev-server',
    'devtools',
    'vitejs-vite-23549',
  ],
  links: {
    github: 'https://github.com/171h/vite-plugin-dev-sourcemaps',
    npm: 'https://www.npmjs.com/package/vite-plugin-dev-sourcemaps',
    website: 'https://github.com/171h/vite-plugin-dev-sourcemaps#readme',
  },
  source: {
    github: '171h/vite-plugin-dev-sourcemaps',
    npm: 'vite-plugin-dev-sourcemaps',
  },
})
