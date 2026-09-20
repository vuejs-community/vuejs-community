import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cratis/arc.vite',
  description: 'Vite helpers for Cratis Arc applications — metadata and query plugins for the generated TypeScript proxies of the CQRS framework for ASP.NET Core.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/Cratis/Arc',
    npm: 'https://www.npmjs.com/package/@cratis/arc.vite',
    website: 'https://www.cratis.io/arc/',
  },
  source: {
    github: 'Cratis/Arc',
    npm: '@cratis/arc.vite',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 12825,
      weekly: 2311,
    },
  },
})
