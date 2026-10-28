import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pixi-ui-editor',
  description: 'Unity-like visual editor for @pixi/react scenes. A dev-only Vite plugin plus an in-browser overlay; your .tsx source stays the single source of truth.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'pixi',
    'pixi.js',
    '@pixi/react',
    'editor',
    'visual-editor',
    'ui-editor',
  ],
  links: {
    github: 'https://github.com/slashpot/pixi-editor',
    npm: 'https://www.npmjs.com/package/vite-plugin-pixi-ui-editor',
    website: 'https://github.com/slashpot/pixi-editor#readme',
  },
  source: {
    github: 'slashpot/pixi-editor',
    npm: 'vite-plugin-pixi-ui-editor',
  },
})
