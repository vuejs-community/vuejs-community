import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@slowbot/make-kit-comet',
  description: 'Runtime for the GDS Make Kit (Comet edition). Make-sandbox Vite shim, raw USWDS wrappers (gov banner, accordion, footer), and the Simpler Grants theme bundled as the default. Theme-agnostic: future programs ship CSS-only sibling packages.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'uswds',
    'comet',
    'figma-make',
    'simpler-grants',
    'design-system',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/slowbot/make-kit-comet',
    npm: 'https://www.npmjs.com/package/@slowbot/make-kit-comet',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 5,
    },
  },
})
