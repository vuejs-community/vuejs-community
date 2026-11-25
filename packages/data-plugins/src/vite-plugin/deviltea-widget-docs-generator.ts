import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@deviltea/widget-docs-generator',
  description: 'Turns a Widget System\'s TypeScript types (the shape) and its plugins\' builder docs (the prose) into documentation and AI-facing artifacts: a docs object served by a Vite plugin, an IR, JSON Schemas, flat/tree converters and Agent Skills.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'widget',
    'documentation',
    'json-schema',
    'vite-plugin',
    'agent-skills',
    'llm',
  ],
  links: {
    github: 'https://github.com/DevilTea/widget',
    npm: 'https://www.npmjs.com/package/@deviltea/widget-docs-generator',
    website: 'https://github.com/DevilTea/widget/tree/main/packages/docs-generator#readme',
  },
  source: {
    github: 'DevilTea/widget',
    npm: '@deviltea/widget-docs-generator',
  },
})
