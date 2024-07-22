'use client'
import React, {useState} from 'react';
import Image from "next/image";
import cn from 'classnames';

import Link from "../../../shared/ui/link/link";
import {DropdownMenuType} from "../../../shared/ui/dropdown-menu/DropdownMenu.type";
import {ICONS_MAP} from "../../../constants/icon/icon";
import {useClickOutside} from "../../../shared/hooks/useClickOutside";
import style from './DropdownMenu.module.scss';

const DropdownMenu = (
  {
    title,
    menu,
    icon,
    activeIcon,
    className
  }: DropdownMenuType
) => {
  const [isOpen, setOpen] = useState(false)

  const ref = useClickOutside(() => setOpen(false), isOpen)

  return (
    <div ref={ref} className={cn(style.dropdown_menu, className)}>
      <div
        className={cn(style.title, isOpen && style.active)}
        onClick={() => setOpen(true)}
      >
        <div className={style.icon}>
          <Image
            alt={'Image'}
            src={ICONS_MAP[isOpen ? activeIcon : icon]}
            layout={'fill'}
          />
        </div>
        {title}
        <Image alt={'Image'} src={isOpen ? ICONS_MAP.arrowToggleActive : ICONS_MAP.arrowToggle}/>
        {isOpen && (<div className={style.arrow}/>)}
      </div>
      {isOpen && (
        <div className={style.menu}>
          {menu.map(({title, href}) => (
            <Link
              key={title}
              href={href}
              className={style.item}

            >
              {title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
