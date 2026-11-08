import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@click-to-source-3d/vite-plugin',
  description: 'Click any mesh in a three.js or React Three Fiber scene to see the line of code that made it, the calls that led there, the helpers it used, and edit its values live. A Vite plugin with nothing to add to your code.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'threejs',
    'three.js',
    'react-three-fiber',
    'r3f',
    'webgl',
    '3d',
    'vite',
    'vite-plugin',
    'devtools',
    'inspector',
    'debugging',
    'developer-tools',
    'click-to-source',
    'hot-reload',
    'mcp',
  ],
  links: {
    github: 'https://github.com/pun1th01/click-to-source-3d',
    npm: 'https://www.npmjs.com/package/@click-to-source-3d/vite-plugin',
    website: 'https://github.com/pun1th01/click-to-source-3d#readme',
  },
  source: {
    github: 'pun1th01/click-to-source-3d',
    npm: '@click-to-source-3d/vite-plugin',
  },
})
