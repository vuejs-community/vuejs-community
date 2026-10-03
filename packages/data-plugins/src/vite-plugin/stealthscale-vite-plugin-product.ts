import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stealthscale/vite-plugin-product',
  description: 'Composes a product from its plugins while it builds: checks every plugin against the others, resolves the product, and serves it as virtual:product.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'plugins',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/stealth-scale/scale',
    npm: 'https://www.npmjs.com/package/@stealthscale/vite-plugin-product',
    website: 'https://github.com/stealth-scale/scale/tree/main/packages/vite-plugin-product#readme',
  },
  source: {
    github: 'stealth-scale/scale',
    npm: '@stealthscale/vite-plugin-product',
  },
})
