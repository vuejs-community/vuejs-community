import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fluxwp/plugin-kit',
  description: 'Build wp-admin React screens for your WordPress plugin: Vite preset, typed GraphQL codegen, persisted queries, shared runtime.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fluxwp',
    'wordpress',
    'typescript',
    'wordpress-plugin',
    'wp-admin',
    'react',
    'vite',
    'vite-plugin',
    'graphql',
    'wpgraphql',
    'codegen',
    'cli',
    'admin-ui',
  ],
  links: {
    github: 'https://github.com/FluxWP/FluxWP',
    npm: 'https://www.npmjs.com/package/@fluxwp/plugin-kit',
    website: 'https://github.com/FluxWP/FluxWP/tree/main/packages/plugin-kit#readme',
  },
  source: {
    github: 'FluxWP/FluxWP',
    npm: '@fluxwp/plugin-kit',
  },
})
