'use client'

import React, {useState} from 'react';
import cn from 'classnames';
import Image from "next/image";

import {DetailsType} from "../../../shared/ui/details/details.type";
import {ICONS_MAP} from "../../../constants/icon/icon";
import style from './details.module.scss';

const Details = (
  {
    title,
    body
  }: DetailsType
) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={style.wrapper}>
      <div className={style.title_block} onClick={() => setOpen(!isOpen)}>
        <div className={cn(style.trigger, isOpen && style.trigger_active)}>
          <Image alt={'Image'} src={ICONS_MAP.details} width={14} height={12}/>
        </div>
        <div className={cn(style.title, isOpen && style.title_active)}>
          {title}
        </div>
      </div>
      {
        isOpen && (
          <div className={style.body}>
            {body}
          </div>
        )
      }
    </div>
  );
};

export default Details;
