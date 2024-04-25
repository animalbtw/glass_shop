export type NewsType = {
  entity: {
    id: string
    title: string
    date: string
    image?: string
  }
  size: 's' | 'm' | 'l'
}