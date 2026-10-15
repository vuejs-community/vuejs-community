import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@animus-ui/layergate',
  description: 'Load third-party stylesheets into a cascade layer, per file, with their imports inlined and their URLs kept working',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cascade-layers',
    'css',
    'layer',
    'nextjs',
    'vendor',
    'vite',
    'vite-plugin',
    'webpack',
  ],
  links: {
    github: 'https://github.com/codecaaron/animus',
    npm: 'https://www.npmjs.com/package/@animus-ui/layergate',
    website: 'https://github.com/codecaaron/animus/tree/main/packages/layergate#readme',
  },
  source: {
    github: 'codecaaron/animus',
    npm: '@animus-ui/layergate',
  },
})
