'use client'

import React from 'react';
import Image from "next/image";

import {ICONS_MAP} from "../../../../constants/icon/icon";
import Details from "../../../../shared/ui/details/details";
import Age from "../../../../widgets/catalog/ui/filter/age/age";
import Brand from "../../../../widgets/catalog/ui/filter/brand/brand";
import Type from "../../../../widgets/catalog/ui/filter/type/type";
import Price from "../../../../widgets/catalog/ui/filter/price/price";
import Color from "../../../../widgets/catalog/ui/filter/color/color";
import style from './filter.module.scss'
import Input from "../../../../shared/ui/input/Input";

const Filter = () => {
  return (
    <div className={style.filter_wrapper}>
      <div className={style.title_block}>
        <div className={style.block}>
          Фильтры
        </div>
        <div className={style.clear}>
          Очистить
          <Image
            src={ICONS_MAP.close}
            width={9}
            height={9}
            alt={'Image'}
          />
        </div>
      </div>
      <Input value={''} setValue={() => null} placeholder={'поиск'} className={style.search} />
      <Details title={'Пол и возраст'} body={<Age />} />
      <Details title={'Бренд'} body={<Brand />} />
      <Details title={'Цвет'} body={<Color />} />
      <Details title={'Тип'} body={<Type />} />
      <Details title={'Цена, ₽'} body={<Price />} />
    </div>
  );
};

export default Filter;
