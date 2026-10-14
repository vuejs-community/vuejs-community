import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dotrino/prerender',
  description: 'Las apps de Dotrino llegan con contenido: escribe en el HTML del build lo que la página dice de sí misma, para quien la lee sin ejecutar JavaScript.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dotrino',
    'seo',
    'prerender',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/imdotrino/dotrino-prerender',
    npm: 'https://www.npmjs.com/package/@dotrino/prerender',
    website: 'https://github.com/imdotrino/dotrino-prerender#readme',
  },
  source: {
    github: 'imdotrino/dotrino-prerender',
    npm: '@dotrino/prerender',
  },
})
