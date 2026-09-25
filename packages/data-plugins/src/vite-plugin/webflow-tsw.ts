import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@webflow/tsw',
  description: 'The .tsw toolchain in one package: the authoring API and runtime, the element library, the language engine and compiler, framework adapters for Astro, Next.js, and React, and editor plugins for TypeScript and ESLint.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'astro',
    'cms',
    'compiler',
    'eslint-plugin',
    'nextjs',
    'react',
    'tsw',
    'typescript',
    'typescript-plugin',
    'vite-plugin',
    'webflow',
    'webflow.js',
  ],
  links: {
    github: 'https://github.com/webflow/webflow.js',
    npm: 'https://www.npmjs.com/package/@webflow/tsw',
    website: 'https://github.com/webflow/webflow.js/tree/main/packages/tsw#readme',
  },
  source: {
    github: 'webflow/webflow.js',
    npm: '@webflow/tsw',
  },
})
