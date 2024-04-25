'use client'

import React from 'react';
import Image from "next/image";

import Checkbox from "@/shared/ui/checkbox/checkbox";
import Input from "@/shared/ui/input/Input";
import {ICONS_MAP} from "@/constants/icon/icon";
import style from './color.module.scss'

const Color = () => {
  return (
    <div className={style.wrapper}>
      <Input
        value={''}
        setValue={() => null}
        placeholder={'поиск'}
        wrapperClassName={style.field}
        className={style.input_field}/>
      <div className={style.boxes}>
        <Checkbox title={'Белый'} value={false} onChange={() => null} />
        <Checkbox title={'Бирюза'} value={false} onChange={() => null} />
        <Checkbox title={'Бронза'} value={false} onChange={() => null} />
        <Checkbox title={'Зеленый'} value={false} onChange={() => null} />
        <Checkbox title={'Золото'} value={false} onChange={() => null} />
      </div>
      <div className={style.show_more}>
        <div className={style.toggle}>
          <Image
            src={ICONS_MAP.showMore}
            width={9}
            height={5}
            alt={'Image'}
          />
        </div>
        Показать всё
      </div>
    </div>
  );
};

export default Color;
