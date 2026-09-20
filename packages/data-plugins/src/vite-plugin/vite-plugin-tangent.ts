import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tangent',
  description: 'Vite plugin for Tangent - Visual Tuner for AI-generated code',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tangent',
    'visual-tuner',
    'ai-code',
    'live-editing',
  ],
  links: {
    github: 'https://github.com/mingyouagi/tangent',
    npm: 'https://www.npmjs.com/package/vite-plugin-tangent',
    website: 'https://github.com/mingyouagi/tangent#readme',
  },
  source: {
    github: 'mingyouagi/tangent',
    npm: 'vite-plugin-tangent',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
