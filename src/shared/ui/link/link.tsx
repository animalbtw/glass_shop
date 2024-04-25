'use client'
import React, {useState} from 'react';
import Image from "next/image";
import Link from 'next/link';
import cn from 'classnames';

import {LinkTypesProps} from "@/shared/ui/link/link.types";
import {ICONS_MAP} from "@/constants/icon/icon";
import style from './link.module.scss'

const LinkKit = (
  {
    children,
    icon,
    activeIcon,
    className,
    href = '/',
    onClick,
  }: LinkTypesProps
) => {
  const [isHover, setHover] = useState(false)

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(style.link, className)}
    >
      {icon && <Image alt={'Image'} src={ICONS_MAP[isHover ? activeIcon : icon]}/>}
      {children}
    </Link>
  );
};

export default LinkKit;
