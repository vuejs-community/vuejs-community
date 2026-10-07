import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'webtool-devtool',
  description: 'Dev-only Vite plugin that overlays modular site-building tools (resize, inspect, typography, colors, ...) and writes changes back to source.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'devtools',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/webtool-devtool',
  },
  source: {
    npm: 'webtool-devtool',
  },
})
