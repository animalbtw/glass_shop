import {button_type} from "@/shared/ui/button/button.type";
import dark_banner from "@/assets/pic/banner/dark_banner.png";

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