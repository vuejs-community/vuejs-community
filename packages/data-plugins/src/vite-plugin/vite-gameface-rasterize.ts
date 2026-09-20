import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-gameface-rasterize',
  description: 'A Vite plugin that bakes expensive static CSS decorations into pre-rendered textures using the Gameface Player, so cohtml draws a textured quad instead of re-evaluating shadows, gradients and filters every frame.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'gameface',
    'cohtml',
    'coherent-labs',
    'rasterize',
    '9-slice',
    'performance',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-gameface-rasterize',
  },
  source: {
    npm: 'vite-gameface-rasterize',
  },
})
