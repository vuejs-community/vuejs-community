import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@darcas/rollup-sub-resource-integrity',
  description: 'A zero-dependency Rollup plugin that adds Subresource Integrity (SRI) attributes to HTML files to ensure the integrity of scripts and stylesheets using hashing algorithms like SHA-256, SHA-384, and SHA-512.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'javascript',
    'open-source',
    'rollup',
    'security',
    'sri',
    'subresource-integrity',
    'typescript',
    'vite-plugin',
    'web-security',
  ],
  source: {
    github: 'DarCas/rollup-sub-resource-integrity',
    npm: '@darcas/rollup-sub-resource-integrity',
  },
  links: {
    github: 'https://github.com/DarCas/rollup-sub-resource-integrity',
    npm: 'https://www.npmjs.com/package/@darcas/rollup-sub-resource-integrity',
    website: 'https://sri.os.darcas.app',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 2121,
      weekly: 255,
    },
  },
})
