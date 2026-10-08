import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@inkanjs/vite',
  description: 'Your inkan API inside the Vite dev server: one port, reloaded on every save, /docs next to your frontend.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'inkan',
    'vite',
    'vite-plugin',
    'api',
    'vue',
    'react',
    'svelte',
    'solid',
  ],
  links: {
    github: 'https://github.com/inkanjs/integrations',
    npm: 'https://www.npmjs.com/package/@inkanjs/vite',
    website: 'https://github.com/inkanjs/integrations#readme',
  },
  source: {
    github: 'inkanjs/integrations',
    npm: '@inkanjs/vite',
  },
})
