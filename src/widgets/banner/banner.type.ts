import {button_type} from "../../shared/ui/button/button.type";

export type BannerType = {
  title: string
  description: string
  button?: BannerButtonType
  background?: string
  type: 'light' | 'dark'
  image?: {
    url: string,
    type: 'default' | 'bg'
  }
}

type BannerButtonType = {
  text: string
  href: string
  type: button_type
}