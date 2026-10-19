import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@voxfold/vite',
  description: 'Vite plugin: stamps JSX/TSX in dev, serves the edit-server over /__voxfold/*, and injects the browser overlay.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'voxfold',
    'style-linter',
    'vite',
    'vite-plugin',
    'copywriting',
    'ai-copy',
  ],
  links: {
    github: 'https://github.com/Hexraei/Voxfold',
    npm: 'https://www.npmjs.com/package/@voxfold/vite',
    website: 'https://github.com/Hexraei/Voxfold/tree/main/packages/vite',
  },
  source: {
    github: 'Hexraei/Voxfold',
    npm: '@voxfold/vite',
  },
})
