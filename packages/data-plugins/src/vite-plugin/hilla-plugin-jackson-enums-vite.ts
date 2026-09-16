import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'hilla-plugin-jackson-enums-vite',
  description: 'Vite plugin that rewrites Hilla-generated TypeScript enum values to match Jackson @JsonProperty wire values from a sidecar JSON.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    npm: 'hilla-plugin-jackson-enums-vite',
  },
  links: {
    npm: 'https://www.npmjs.com/package/hilla-plugin-jackson-enums-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 4,
    },
  },
})
