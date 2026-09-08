import type { LLmsModuleOptions } from './runtime/types.ts'
import { addServerHandler, createResolver, defineNuxtModule } from 'nuxt/kit'
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '../../shared/constants/seo.meta.ts'

export default defineNuxtModule<LLmsModuleOptions>({
  meta: {
    name: 'vue-community-llms',
    configKey: 'llms',
    compatibility: {
      nuxt: '>=4.0.0',
    },
  },

  defaults: {
    siteName: SITE_TITLE,
    siteUrl: SITE_URL,
    description: SITE_DESCRIPTION,
    cacheMaxAge: 3600,
  },

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.llms = {
      siteName: options.siteName,
      siteUrl: options.siteUrl,
      description: options.description,
      cacheMaxAge: options.cacheMaxAge,
    }

    addServerHandler({
      route: '/llms.txt',
      method: 'get',
      handler: resolver.resolve('./runtime/server/handlers/llms'),
    })
  },
})
