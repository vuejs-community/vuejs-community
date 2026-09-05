import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svelte-draft',
  description: 'Transcribe SvelteDraft components with Rollup',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'svelte',
    'typescript',
    'typedraft',
    'transcriber',
    'literate programming',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/mistlog/rollup-plugin-svelte-draft',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svelte-draft',
  },
  stats: {
    downloads: {
      monthly: 32,
      weekly: 7,
    },
  },
})
