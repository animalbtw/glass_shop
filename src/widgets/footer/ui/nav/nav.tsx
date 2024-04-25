import React from 'react';
import Image from "next/image";
import cn from 'classnames';

import Link from "@/shared/ui/link/link";
import {links} from "@/widgets/footer/constants/constants";
import {ICONS_MAP} from "@/constants/icon/icon";
import style from './nav.module.scss';

const Nav = () => {
  return (
    <div className={style.columns}>
      {
        links.map(column => (
          <div
            className={style.column}
            key={column.title}
          >
            <div className={style.title}>
              {column.title}
            </div>
            <div className={style.links}>
              {
                column.hrefs.map(({title, href}) => (
                  <Link
                    key={title}
                    href={href}
                    className={style.link}
                  >
                    {title}
                  </Link>
                ))
              }
            </div>
          </div>
        ))
      }
      <div className={style.column}>
          <div className={style.title}>
            Соцсети
          </div>
        <div className={cn(style.links, style.with_icons)}>
          <div className={style.icon}>
            <Image alt={'icon'} src={ICONS_MAP.vk} layout={'fill'} />
          </div>
          <Link href={'/'} className={style.link}>
            ВКонтакте
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
