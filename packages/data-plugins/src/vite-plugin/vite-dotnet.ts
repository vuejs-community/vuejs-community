import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-dotnet',
  description: 'Integration plugin for ASP.NET Core and ViteJS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-integration',
    'vite-plugin',
    'dotnet',
    'asp-net-core',
  ],
  links: {
    github: 'https://github.com/techgems/vite-dotnet',
    npm: 'https://www.npmjs.com/package/vite-dotnet',
    website: 'https://github.com/techgems/vite-dotnet#readme',
  },
  source: {
    github: 'techgems/vite-dotnet',
    npm: 'vite-dotnet',
  },
  stats: {
    stars: 67,
    downloads: {
      monthly: 572,
      weekly: 11,
    },
  },
})
