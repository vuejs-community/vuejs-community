import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ideonate/evals-viewer-server',
  description: 'Vite plugin and middleware exposing the filesystem-backed evals-viewer API, plus reusable building blocks (composeLoaders, datasetCaseLoader, …) for assembling a custom caseDataLoader.',
  version: '0.3.9',
  category: 'plugin',
  tags: [
    'evals',
    'llm',
    'vite',
    'vite-plugin',
    'viewer',
    'evaluation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ideonate/evals-viewer',
    npm: 'https://www.npmjs.com/package/@ideonate/evals-viewer-server',
  },
  stats: {
    downloads: {
      monthly: 371,
      weekly: 26,
    },
  },
})
