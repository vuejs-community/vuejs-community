import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yarcl/react',
  description: 'Yet another react component library. Your config file is the design system: every key becomes a typed prop and a rendered style.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'component-library',
    'design-system',
    'design-tokens',
    'theming',
    'vite-plugin',
    'typescript',
  ],
  links: {
    github: 'https://github.com/eugenioenko/yarcl',
    npm: 'https://www.npmjs.com/package/@yarcl/react',
    website: 'https://yarcl.dev',
  },
  source: {
    github: 'eugenioenko/yarcl',
    npm: '@yarcl/react',
  },
})
