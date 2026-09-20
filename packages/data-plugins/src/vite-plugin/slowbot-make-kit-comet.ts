import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@slowbot/make-kit-comet',
  description: 'Runtime for the GDS Make Kit (Comet edition). Make-sandbox Vite shim, raw USWDS wrappers (gov banner, accordion, footer), and the Simpler Grants theme bundled as the default. Theme-agnostic: future programs ship CSS-only sibling packages.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'uswds',
    'comet',
    'figma-make',
    'simpler-grants',
    'design-system',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/slowbot/make-kit-comet',
    npm: 'https://www.npmjs.com/package/@slowbot/make-kit-comet',
    website: 'https://github.com/slowbot/make-kit-comet#readme',
  },
  source: {
    github: 'slowbot/make-kit-comet',
    npm: '@slowbot/make-kit-comet',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
