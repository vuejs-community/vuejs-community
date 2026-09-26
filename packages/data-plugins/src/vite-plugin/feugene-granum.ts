import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@feugene/granum',
  description: 'Build pipeline for granular UI packages: components, styles, design tokens and themes flow from provider manifests to the application bundle through one resolution. Framework-agnostic, zero dependencies.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'granum',
    'granular',
    'design-system',
    'design-tokens',
    'themes',
    'vite-plugin',
    'css',
    'tree-shakeable',
    'typescript',
  ],
  links: {
    github: 'https://github.com/efureev/granum',
    npm: 'https://www.npmjs.com/package/@feugene/granum',
    website: 'https://github.com/efureev/granum#readme',
  },
  source: {
    github: 'efureev/granum',
    npm: '@feugene/granum',
  },
})
