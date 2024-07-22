'use client'

import React from 'react';
import Image from "next/image";
import cn from 'classnames';

import {type NewsType} from "../../widgets/news/news.type";
import big from '../../assets/pic/news/bignews.png'
import medium from '../../assets/pic/news/mediumnews.png'
import small from '../../assets/pic/news/sm.png'
import style from './news.module.scss'

const News = (
  {
    entity,
    size = 'l'
  }: NewsType
) => {
  // only for mocks
  const getImage = () => {
    switch (size) {
      case 'l':
        return big
      case 'm':
        return medium
      case 's':
        return small
      default:
        return small
    }
  }
  return (
    <div
      style={{
        cursor: size === 's' && 'pointer'
      }}
      onClick={() => {
        if (size === 's') {
          console.log('click on small')
        }
      }}
    >
      <div
        className={cn(
          style.news_wrapper,
          size === 'l' && style.large_banner,
          size === 'm' && style.medium_banner,
          size === 's' && style.small_banner,
        )}
      >
        <div className={style.gradient}/>
        <div className={cn(
          style.image
        )}>
          <Image
            layout="fill"
            objectFit="cover"
            quality={100}
            loading={'lazy'}
            src={getImage()}
            className={cn(
              size === 's' ? 'border7' : 'border14'
            )}/>
        </div>
        <div className={style.description}>
          {size !== 's' && (
            <div className={style.title_block}>
              <div className={cn(
                style.title,
                size === 'l' && style.large_title,
                size === 'm' && style.medium_title,
              )}>
                {entity.title}
              </div>
              <div className={style.subtitle_block}>
                <div className={cn(
                  style.date,
                  size === 'l' && style.large_date,
                  size === 'm' && style.medium_date,
                )}>
                  {entity.date}
                </div>
                <div
                  onClick={() => console.log(entity.id)}
                  className={style.action}
                >
                  Читать далее &gt;
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {
        size === 's' && (
          <div className={style.title_block}>
            <div className={cn(
              style.title,
              style.small_title,
            )}>
              {entity.title}
            </div>
            <div className={style.subtitle_block}>
              <div className={cn(
                style.date,
                style.small_date,
              )}>
                {entity.date}
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default News;
