'use client'

import React from 'react';
import Image from "next/image";

import Input from "../../../../../shared/ui/input/Input";
import {ICONS_MAP} from "../../../../../constants/icon/icon";
import Checkbox from "../../../../../shared/ui/checkbox/checkbox";
import style from './brand.module.scss';

const Brand = () => {
  return (
    <div className={style.wrapper}>
      <Input
        value={''}
        setValue={() => null}
        placeholder={'поиск'}
        wrapperClassName={style.field}
        className={style.input_field}/>
      <div className={style.boxes}>
        <Checkbox title={'Aigle'} value={false} onChange={() => null} />
        <Checkbox title={'Ballet iJunior'} value={false} onChange={() => null} />
        <Checkbox title={'Blue Classic'} value={false} onChange={() => null} />
        <Checkbox title={'Celine Dion'} value={false} onChange={() => null} />
        <Checkbox title={'Dackor'} value={false} onChange={() => null} />
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

export default Brand;
