import React from "react";

export type ButtonType = {
  onClick?: (() => void) | string
  variant?: button_variant
  type?: button_type
  icon?: string
  className?: string
  children: React.ReactNode | string
}

export enum button_variant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export enum button_type {
  link = 'link',
  default = 'default',
}