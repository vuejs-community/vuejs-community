import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ai-lambda',
  description: 'Compile natural-language array operations into JavaScript during Vite builds.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'ai-lambda',
    'rollup-plugin',
    'rolldown-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-ai-lambda',
  },
  source: {
    npm: 'vite-plugin-ai-lambda',
  },
})
