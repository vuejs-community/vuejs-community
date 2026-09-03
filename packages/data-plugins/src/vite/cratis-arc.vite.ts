import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@cratis/arc.vite',
  description: 'Vite helpers for Cratis Arc applications — metadata and query plugins for the generated TypeScript proxies of the CQRS framework for ASP.NET Core.',
  version: '22.10.1',
  category: 'plugin',
  tags: [
    'cratis',
    'arc',
    'cqrs',
    'vite',
    'vite-plugin',
    'typescript',
    'proxy',
    'aspnetcore',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Cratis/Arc',
    npm: 'https://www.npmjs.com/package/@cratis/arc.vite',
  },
  stats: {
    downloads: {
      monthly: 13844,
      weekly: 2598,
    },
  },
})
