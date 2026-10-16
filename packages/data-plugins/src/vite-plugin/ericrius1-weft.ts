import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ericrius1/weft',
  description: 'A thin WebGPU kit: a frame is an explicit, ordered list of passes over named resources, and WGSL is the single definition of the data. With a Vite plugin for typed, hot-reloading .wgsl imports.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'webgpu',
    'wgsl',
    'graphics',
    'render-graph',
    'gpu',
    'vite-plugin',
    'shaders',
  ],
  links: {
    github: 'https://github.com/ericrius1/weft',
    npm: 'https://www.npmjs.com/package/@ericrius1/weft',
    website: 'https://github.com/ericrius1/weft#readme',
  },
  source: {
    github: 'ericrius1/weft',
    npm: '@ericrius1/weft',
  },
})
