import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@click-to-source-3d/vite-plugin',
  description: 'Inspect any object in a React Three Fiber scene: see the line that created it and edit its values. Vite plugin for Click-to-Source 3D.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'threejs',
    'react-three-fiber',
    'r3f',
    'vite',
    'vite-plugin',
    'devtools',
    'inspector',
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
