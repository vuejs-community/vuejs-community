import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ideonate/evals-viewer-server',
  description: 'Vite plugin and middleware exposing the filesystem-backed evals-viewer API, plus reusable building blocks (composeLoaders, datasetCaseLoader, …) for assembling a custom caseDataLoader.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'evals',
    'llm',
    'vite',
    'vite-plugin',
    'viewer',
    'evaluation',
  ],
  source: {
    github: 'ideonate/evals-viewer',
    npm: '@ideonate/evals-viewer-server',
  },
  links: {
    github: 'https://github.com/ideonate/evals-viewer',
    npm: 'https://www.npmjs.com/package/@ideonate/evals-viewer-server',
    website: 'https://github.com/ideonate/evals-viewer#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 563,
      weekly: 183,
    },
  },
})
