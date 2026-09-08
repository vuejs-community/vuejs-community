import type { LLmsModuleOptions } from '~~/modules/llms/runtime/types.ts'
import { projectCategoryMetadata } from '#shared/constants/category.ts'
import { formatCount } from '#shared/utils/format.ts'

const categoryLabels = new Map(projectCategoryMetadata.map(category => [category.id, category.label]))

function categoryLabel(category: string): string {
  const knownLabel = categoryLabels.get(category)
  if (knownLabel)
    return knownLabel

  return category
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map(part => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ')
}

function compareProjects(left: ProjectRecord, right: ProjectRecord): number {
  return right.stars - left.stars
    || right.downloads_monthly - left.downloads_monthly
    || right.downloads_weekly - left.downloads_weekly
    || left.name.localeCompare(right.name, 'en', { sensitivity: 'base' })
}

function createProjectLine(project: ProjectRecord): string {
  const links = [
    { label: 'Website', url: project.website },
    { label: 'GitHub', url: project.github },
    { label: 'npm', url: project.npm },
  ].filter(link => link.url)

  const projectReference = links[0] ? `[${project.name}](${links[0].url})` : project.name
  const details = project.description ? `${projectReference}: ${project.description}` : projectReference

  const secondaryLinks = links
    .slice(1)
    .map(link => `[${link.label}](${link.url})`)

  const stats = [
    project.stars > 0 ? `${formatCount(project.stars)} GitHub stars` : '',
    project.downloads_monthly > 0 ? `${formatCount(project.downloads_monthly)} monthly npm downloads` : '',
  ].filter(Boolean)

  const metadata = [...secondaryLinks, ...stats]

  return `- ${details}${metadata.length > 0 ? ` — ${metadata.join(' · ')}` : ''}`
}

function compareCategories(left: string, right: string): number {
  const leftIndex = projectCategoryMetadata.findIndex(category => category.id === left)
  const rightIndex = projectCategoryMetadata.findIndex(category => category.id === right)
  const normalizedLeftIndex = leftIndex === -1 ? Number.MAX_SAFE_INTEGER : leftIndex
  const normalizedRightIndex = rightIndex === -1 ? Number.MAX_SAFE_INTEGER : rightIndex

  return normalizedLeftIndex - normalizedRightIndex || left.localeCompare(right, 'en')
}

export function generateLLms(projects: ProjectRecord[], options: Omit<LLmsModuleOptions, 'cacheMaxAge'>): string {
  const projectsByCategory = Map.groupBy(projects, project => project.category)
  const categoryIds = [...projectsByCategory.keys()].sort(compareCategories)
  const lines = [
    `# ${options.siteName}`,
    '',
    `> ${options.description}`,
    '',
    '## Main Pages',
    '',
    `- [Home](${options.siteUrl})`,
    ...categoryIds.map((category) => {
      const categoryProjects = projectsByCategory.get(category) ?? []
      const categoryUrl = new URL(encodeURIComponent(category), options.siteUrl).toString()
      const projectLabel = categoryProjects.length === 1 ? 'project' : 'projects'
      return `- [${categoryLabel(category)}](${categoryUrl}): ${categoryProjects.length.toLocaleString('en-US')} ${projectLabel}`
    }),
  ]

  for (const category of categoryIds) {
    const categoryProjects = [...(projectsByCategory.get(category) ?? [])].sort(compareProjects)

    lines.push('', `## ${categoryLabel(category)}`, '')
    lines.push(...categoryProjects.map(project => createProjectLine(project)))
  }

  return `${lines.join('\n')}\n`
}
