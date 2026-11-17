import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pixelmatters/toolbar-plugins',
  description: 'Built-in plugins for @pixelmatters/toolbar: Layout Shifts, Interaction Timing, Runtime Errors, an Accessibility Audit, the design QA Inspector, PII Guard and Preview Identity, with Vite plugins for the build data they read. One subpath per plugin.',
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
    'errors',
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
