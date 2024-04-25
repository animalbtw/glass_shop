import React from "react";
import {ICONS_MAP} from "@/constants/icon/icon";

export type LinkTypesProps = {
  children?: React.ReactNode | string
  icon?: keyof typeof ICONS_MAP
  activeIcon?: keyof typeof ICONS_MAP
  className?: string
  href: string
  onClick?: () => void
}