import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@plawn/strata-react',
  description: 'Strata for React apps: Vite plugin + Babel plugin for expression-level provenance, and the <StrataOverlay/> component.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'vite-plugin',
    'babel-plugin',
    'provenance',
    'devtools',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@plawn/strata-react',
    website: 'https://git.konf.sh/plawn/strata',
  },
  source: {
    npm: '@plawn/strata-react',
  },
})
