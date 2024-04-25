import {ICONS_MAP} from "@/constants/icon/icon";

export type DropdownMenuType = {
  title: string
  className?: string
  menu: MenuType[]
  icon: keyof typeof ICONS_MAP
  activeIcon: keyof typeof ICONS_MAP
}

type MenuType = {
  href: string
  title: string
}