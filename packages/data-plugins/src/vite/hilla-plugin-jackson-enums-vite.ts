import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'hilla-plugin-jackson-enums-vite',
  description: 'Vite plugin that rewrites Hilla-generated TypeScript enum values to match Jackson @JsonProperty wire values from a sidecar JSON.',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'hilla',
    'vaadin',
    'jackson',
    'enum',
    'json-property',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/hilla-plugin-jackson-enums-vite',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 8,
    },
  },
})
