import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@thewonderjoy/gaze-js',
  description: 'Gaze JavaScript client: ray()-style debugging for Node, Bun, Deno, browsers and edge runtimes, with a Vite plugin and Vue/React/Svelte adapters. Speaks the Gaze native protocol and the Spatie Ray wire format.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'debug',
    'ray',
    'dump',
    'gaze',
    'vite-plugin',
    'vue',
    'react',
    'svelte',
  ],
  links: {
    github: 'https://github.com/thewonderjoy/gaze-js',
    npm: 'https://www.npmjs.com/package/@thewonderjoy/gaze-js',
    website: 'https://thewonderjoy.com/products/gaze',
  },
  source: {
    github: 'thewonderjoy/gaze-js',
    npm: '@thewonderjoy/gaze-js',
  },
})
