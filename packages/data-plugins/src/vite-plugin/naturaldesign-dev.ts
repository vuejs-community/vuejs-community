import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@naturaldesign/dev',
  description: 'Dev-only plugin for Natural Design: stamps JSX with its source, indexes the project\'s components and renders them, so Natural Design can show and edit a project\'s real components. Run `npx @naturaldesign/dev init` in a Next or Vite project.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'natural-design',
    'vite-plugin',
    'nextjs',
    'design-tool',
    'components',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@naturaldesign/dev',
  },
  source: {
    npm: '@naturaldesign/dev',
  },
})
