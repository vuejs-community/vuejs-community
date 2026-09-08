import type { LLmsModuleOptions } from '../../types'
import { defineEventHandler, setResponseHeader, setResponseStatus } from 'h3'
import { useRuntimeConfig } from '#imports'
import { generateLLms } from '../utils/generate-llms'
import { queryLlmsProjects } from '../utils/query-projects'

interface CachedDocument {
  expiresAt: number
  value: string
}

let cachedDocument: CachedDocument | undefined

export default defineEventHandler(async (event) => {
  setResponseHeader(event, 'content-type', 'text/plain; charset=utf-8')
  setResponseHeader(event, 'x-content-type-options', 'nosniff')

  const runtimeConfig = useRuntimeConfig(event)
  const config = runtimeConfig.llms as LLmsModuleOptions
  const cacheEnabled = config.cacheMaxAge > 0 && Boolean(config.siteUrl)

  if (cacheEnabled)
    setResponseHeader(event, 'cache-control', `public, max-age=0, s-maxage=${config.cacheMaxAge}`)
  else
    setResponseHeader(event, 'cache-control', 'no-store')

  try {
    const now = Date.now()
    if (cacheEnabled && cachedDocument?.expiresAt && cachedDocument.expiresAt > now)
      return event.method === 'HEAD' ? '' : cachedDocument.value

    const projects = await queryLlmsProjects(event.context.database)
    const document = generateLLms(projects, {
      siteName: config.siteName,
      siteUrl: config.siteUrl,
      description: config.description,
    })

    if (cacheEnabled) {
      cachedDocument = {
        expiresAt: now + config.cacheMaxAge * 1000,
        value: document,
      }
    }

    return event.method === 'HEAD' ? '' : document
  }
  catch (error) {
    setResponseStatus(event, 500, 'Internal Server Error')
    return event.method === 'HEAD' ? '' : 'Unable to generate llms.txt.\n'
  }
})
