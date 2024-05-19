'use client'
import React from 'react';

import Link from "@/shared/ui/link/link";
import Button from "@/shared/ui/button/button";
import {Navigation} from "@/constants/navigation";
import {button_type, button_variant} from "@/shared/ui/button/button.type";
import style from './nav.module.scss'
import DropdownMenu from "@/shared/ui/dropdown-menu/DropdownMenu";
import { useAppContext } from '@/context';

const Nav = () => {
  const { setModalOpen } = useAppContext();

  return (
    <nav className={style.nav}>
      {
        Navigation.map(({href, icon, activeIcon, text, type}) => {
          if (type === 'menu') {
            return (
              <DropdownMenu
                key={text}
                menu={[
                  {title: 'asc', href: 'href'},
                  {title: 'title', href: 'href'},
                  {title: 'title', href: 'href'},
                  {title: 'title', href: 'href'},
                ]}
                icon={icon}
                activeIcon={activeIcon}
                title={text}
                className={style.dropdown}
              />
            )
          }

          if (type === 'button') {
            const buttonClickHandler = () => {
              if (icon === 'booking') {
                return setModalOpen(true)
              }

              return href
            }
            return (
              <Button
                key={text}
                icon={icon}
                type={icon === 'booking' ? button_type.default : button_type.link}
                className={style.button}
                onClick={buttonClickHandler}
              >
                {text}
              </Button>
            )
          }

          return (
            <Link
              key={text}
              href={href}
              className={style.link}
              icon={icon}
              activeIcon={activeIcon}
            >
              {text}
            </Link>
          )
        })
      }
    </nav>
  );
};

export default Nav;
