import React from 'react';
import Image from "next/image";
import cn from 'classnames';

import {button_type, ButtonType} from "@/shared/ui/button/button.type";
import {ICONS_MAP} from "@/constants/icon/icon";
import style from './button.module.scss'
import Link from "next/link";

const button_variant_classes = {
  primary: style.primary,
  secondary: style.secondary,
  tertiary: style.tertiary,
}

const Button = (
  {
    onClick,
    variant = 'primary',
    icon,
    className,
    children,
    type
  }: ButtonType
) => {
  if (type === button_type.link) {
    return (
      <Link className={cn(style.button, button_variant_classes[variant], className)} href={onClick}>
        {icon && <Image
            alt={'Image'}
            src={ICONS_MAP[icon]}
        />}
        {children}
      </Link>
    )
  }

  return (
    <button className={cn(style.button, button_variant_classes[variant], className)} onClick={onClick as () => void}>
      {icon && <Image
          alt={'Image'}
          src={ICONS_MAP[icon]}
      />}
      {children}
    </button>
  );
};

export default Button;
