import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pixelmatters/toolbar-plugins',
  description: 'Built-in plugins for @pixelmatters/toolbar: Layout Shifts, Interaction Timing, an Accessibility Audit and the design QA Inspector, with a Vite plugin that hands the Inspector your design tokens. One subpath per plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'accessibility',
    'axe',
    'cls',
    'design-qa',
    'devtools',
    'inp',
    'inspector',
    'layout-shift',
    'pixelmatters',
    'tanstack-intent',
    'toolbar',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Pixelmatters/devtools',
    npm: 'https://www.npmjs.com/package/@pixelmatters/toolbar-plugins',
    website: 'https://github.com/Pixelmatters/devtools/tree/main/packages/toolbar-plugins#readme',
  },
  source: {
    github: 'Pixelmatters/devtools',
    npm: '@pixelmatters/toolbar-plugins',
  },
})
