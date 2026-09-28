import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@whythis/vite',
  description: 'Development-only Vue SFC instrumentation for WhyThis',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'whythis',
    'vite',
    'vite-plugin',
    'vue',
    'vue3',
    'debugging',
    'developer-tools',
    'template',
  ],
  links: {
    github: 'https://github.com/ywkoh/whythis',
    npm: 'https://www.npmjs.com/package/@whythis/vite',
    website: 'https://github.com/ywkoh/whythis#readme',
  },
  source: {
    github: 'ywkoh/whythis',
    npm: '@whythis/vite',
  },
})
