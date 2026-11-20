import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aiti-ai/example-vite',
  description: 'Reference integration: a minimal vite app with aiti-devtools attached through a single plugin call. Standalone — it does not ship or require the pi-web distribution.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'aiti',
    'aiti-devtools',
    'vite',
    'vite-plugin',
    'example',
    'reference',
    'mcp',
    'ai-devtools',
  ],
  links: {
    github: 'https://github.com/aiti-ai/aiti-ai',
    npm: 'https://www.npmjs.com/package/@aiti-ai/example-vite',
    website: 'https://github.com/aiti-ai/aiti-ai/tree/main/examples/aiti-vite-demo#readme',
  },
  source: {
    github: 'aiti-ai/aiti-ai',
    npm: '@aiti-ai/example-vite',
  },
})
