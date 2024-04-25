'use client'

import React from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";

import {CatalogCardType} from "@/widgets/catalog-card/catalog-card.type";
import {priceSerializer} from "@/shared/utils/StringHandler";
import glass_placeholder from '../../assets/pic/catalog/glass_placeholder.png'
import style from './catalog-card.module.scss';

const CatalogCard = (
  {
    entity
  }: CatalogCardType
) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push(entity.articleNumber)} className={style.wrapper}>
      <div className={style.image}>
        <Image
          alt={'Image'}
          src={entity?.image ? entity.image : glass_placeholder}
        />
      </div>
      <div className={style.description}>
        <div className={style.primary_info}>
          <div className={style.title}>
            {entity.title}
          </div>
          <div className={style.price}>
            {priceSerializer(entity.price)}
          </div>
        </div>
        <div className={style.article}>
          {entity.articleNumber}
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
