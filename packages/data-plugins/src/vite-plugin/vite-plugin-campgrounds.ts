import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-campgrounds',
  description: 'US federal campgrounds (Recreation.gov RIDB) as a build-time Vite virtual module: filter by state, agency and amenities in vite.config and ship only what your site needs.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'rolldown',
    'campgrounds',
    'camping',
    'ridb',
    'recreation.gov',
    'geojson',
    'open-data',
    'maps',
  ],
  links: {
    github: 'https://github.com/campkitchenus-maker/vite-plugin-campgrounds',
    npm: 'https://www.npmjs.com/package/vite-plugin-campgrounds',
    website: 'https://campkitchen.us/pages/campground-map',
  },
  source: {
    github: 'campkitchenus-maker/vite-plugin-campgrounds',
    npm: 'vite-plugin-campgrounds',
  },
})
