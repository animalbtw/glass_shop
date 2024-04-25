import React, {useState} from 'react';

import CatalogCard from "@/widgets/catalog-card/catalog-card";
import Banner from "@/widgets/banner/banner";
import Sorting from "@/widgets/catalog/ui/list/ui/sorting/sorting";
import {list_mocks} from "@/widgets/catalog/ui/list/list.constants";
import {button_type} from "@/shared/ui/button/button.type";
import white_image from '../../../../assets/pic/banner/white_banner.png'
import dark_image from '../../../../assets/pic/banner/darkbanner.png'
import style from './list.module.scss'

const gradient = `radial-gradient(279.09% 305.69% at 10.56% 109.09%, #2B8B7C 0%, rgba(43, 139, 124, 0.00) 100%)`;

const List = () => {
  return (
    <div className={style.catalog_container}>
      <div className={style.sorting}>
        <Sorting />
      </div>
      <div className={style.catalog}>
        <div className={style.catalog_wrapper}>
          {list_mocks.map((entity) => (
            <CatalogCard
              key={entity.articleNumber}
              entity={entity}
            />
          ))}
        </div>
        <Banner
          title={'Диагностика зрения'}
          description={'У вас есть сомнения в качестве своего зрения? Мы предлагаем вам бесплатную первичную диагностику в нашей оптике!'}
          type={'dark'}
          image={{url: dark_image, type: 'default'}}
          background={gradient}
          button={{text: 'Подробнее', type: button_type.link, href: '/'}}
        />

      </div>
    </div>
  );
};

export default List;
