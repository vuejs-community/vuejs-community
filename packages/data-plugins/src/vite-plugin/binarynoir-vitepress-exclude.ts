import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@binarynoir/vitepress-exclude',
  description: 'A VitePress plugin that keeps pages out of the build with a .exclude file in any folder, and restarts the dev server when one changes.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vitepress',
    'vitepress-plugin',
    'vite-plugin',
    'exclude',
    'srcExclude',
    'drafts',
    'docs',
    'documentation',
  ],
  links: {
    github: 'https://github.com/binarynoir/vitepress-exclude',
    npm: 'https://www.npmjs.com/package/@binarynoir/vitepress-exclude',
    website: 'https://github.com/binarynoir/vitepress-exclude#readme',
  },
  source: {
    github: 'binarynoir/vitepress-exclude',
    npm: '@binarynoir/vitepress-exclude',
  },
})
