import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@application-kit/module-manifest',
  description: 'Манифест модуля продукта: контракты web-, CLI-, консьюмер- и грант-манифестов, сборщики модулей процесса с проверкой дублей, SSR-реестр клиентских модулей для NestJS и Vite-плагин клиентских entry по раскладке',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'manifest',
    'modules',
    'nestjs',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@application-kit/module-manifest',
    website: 'https://gitlab.com/application-kit/application-kit/-/tree/main/packages/module-manifest',
  },
  source: {
    npm: '@application-kit/module-manifest',
  },
})
