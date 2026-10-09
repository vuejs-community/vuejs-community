import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dev-source-map',
  description: 'Give original source files distinct URLs in Vite dev sourcemaps for reliable DevTools navigation.',
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
    'devtools',
    'react-devtools',
  ],
  links: {
    github: 'https://github.com/sexyHuang/vite-plugin-dev-source-map',
    npm: 'https://www.npmjs.com/package/vite-plugin-dev-source-map',
    website: 'https://github.com/sexyHuang/vite-plugin-dev-source-map#readme',
  },
  source: {
    github: 'sexyHuang/vite-plugin-dev-source-map',
    npm: 'vite-plugin-dev-source-map',
  },
})
