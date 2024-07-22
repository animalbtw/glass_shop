'use client'

import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Link from "../../../shared/ui/link/link";
import {BreadcrumbsType} from "../../../shared/ui/breadcrumbs/breadcrumbs.type";
import {ICONS_MAP} from "../../../constants/icon/icon";
import style from './breadcrumbs.module.scss';

const Breadcrumbs = (
  {
    chain,
    isPushBack
  }: BreadcrumbsType
) => {
  const router = useRouter()


  return (
    <div className={style.breadcrumbs}>
      {isPushBack && (
        <div onClick={() => router.back()} className={style.nav_back}>
          <Image
            src={ICONS_MAP.navArrowBack}
            layout={'fill'}
            alt={'Image'}
          />
        </div>
      )}
      {chain.map(({text, href}, index) => {
        if (index + 1 < chain.length) {
          return (
            <React.Fragment
              key={text}
            >
              <Link
                href={href}
                className={style.crumb}
              >
                {text}
              </Link>
              {
                index + 1 < chain.length && (
                  <div className={style.divider}>
                    <Image
                      alt={'Image'}
                      layout={'fill'}
                      src={ICONS_MAP.breadcrumbs}
                    />
                  </div>
                )
              }
            </React.Fragment>
          )
        }

        return (
          <div
            key={text}
            className={style.crumb_active}
          >
            {text}
          </div>
        )
      })}
    </div>
  );
};

export default Breadcrumbs;
