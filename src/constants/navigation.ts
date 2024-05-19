import {ICONS_MAP} from "@/constants/icon/icon";

type NavigationType = {
  icon: keyof typeof ICONS_MAP
  activeIcon: keyof typeof ICONS_MAP
  href: string
  text: string
  type: 'link' | 'button' | 'menu'
}

export const Navigation: NavigationType[] = [
  {
    icon: 'glasses',
    activeIcon: 'glassesActive',
    href: '/catalog',
    text: 'очки',
    type: 'link'
  },
  {
    icon: 'lens',
    activeIcon: 'lensActive',
    href: '/catalog',
    text: 'линзы',
    type: 'link'
  },
  {
    icon: 'eye',
    activeIcon: 'eyeActive',
    href: '/',
    text: 'здоровье глаз',
    type: 'menu'
  },
  {
    icon: 'lab',
    activeIcon: 'labActive',
    href: '/',
    text: 'лаборатория',
    type: 'link'
  },
  {
    icon: 'info',
    activeIcon: 'infoActive',
    href: '/about-us',
    text: 'о нас',
    type: 'menu'
  },
  {
    icon: 'booking',
    activeIcon: 'booking',
    href: '',
    text: 'запись',
    type: 'button'
  },
  {
    icon: 'language',
    activeIcon: 'language',
    href: '/',
    text: 'рус',
    type: 'link'
  },
]