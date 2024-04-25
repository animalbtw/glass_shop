export type BreadcrumbsType = {
  chain: BreadcrumbChainType[]
  isPushBack?: boolean
}

type BreadcrumbChainType = {
  text: string
  href: string
}