import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'inspeck',
  description: 'Inspeck for your app: hover any element to see its CSS, click it to leave a note for Claude. `npx inspeck init` sets it all up.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'claude',
    'claude-code',
    'inspect',
    'css',
    'design-review',
    'annotation',
  ],
  links: {
    github: 'https://github.com/pulkitmittal19/inspeck-claude',
    npm: 'https://www.npmjs.com/package/inspeck',
    website: 'https://github.com/pulkitmittal19/inspeck-claude#readme',
  },
  source: {
    github: 'pulkitmittal19/inspeck-claude',
    npm: 'inspeck',
  },
})
