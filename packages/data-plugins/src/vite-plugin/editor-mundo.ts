import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'editor-mundo',
  description: 'Editor de nivel in-game para mundos React Three Fiber: mapa 2D exacto + edición sobre el terreno 3D, con guardado al repo desde el dev server de Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react-three-fiber',
    'three',
    'rapier',
    'level-editor',
    'vite-plugin',
    'devtools',
  ],
  links: {
    github: 'https://github.com/ElChimbu/editor-mundo',
    npm: 'https://www.npmjs.com/package/editor-mundo',
    website: 'https://github.com/ElChimbu/editor-mundo#readme',
  },
  source: {
    github: 'ElChimbu/editor-mundo',
    npm: 'editor-mundo',
  },
})
