import React from 'react';

import Link from "@/shared/ui/link/link";
import Button from "@/shared/ui/button/button";
import {Navigation} from "@/constants/navigation";
import {button_variant} from "@/shared/ui/button/button.type";
import style from './nav.module.scss'
import DropdownMenu from "@/shared/ui/dropdown-menu/DropdownMenu";

const Nav = () => {
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
            return (
              <Button
                key={text}
                icon={icon}
                type={button_variant.tertiary}
                className={style.button}
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
