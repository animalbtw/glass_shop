'use client'

import React from 'react';
import cn from 'classnames';
import Image from "next/image";

import Button from "@/shared/ui/button/button";
import {BannerType} from "@/widgets/banner/banner.type";
import {button_type, button_variant} from "@/shared/ui/button/button.type";
import style from './banner.module.scss';

const DEFAULT_BACKGROUND = '#FFFFFF'
const BG_STYLES = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  'z-index': '-1',
  overflow: 'hidden',
  'border-radius': '14px',
}

const Banner = (
  {
    title,
    description,
    button,
    background = DEFAULT_BACKGROUND,
    type = 'light',
    image,
  }: BannerType
) => {
  return (
    <div
      style={{
        background,
        color: type === 'light' ? '#282828 !important' : '#FFFFFF !important'
      }}
      className={style.banner}
    >
      <div className={style.info_block}>
        <div className={cn(
          style.title,
          type === 'dark' && style.title_dark
        )}>
          {title}
        </div>
        <div className={cn(
          style.description,
          type === 'dark' && style.description_dark
        )}>
          {description}
        </div>
        {button && (
          <div className={style.action}>
            <Button
              onClick={''}
              type={button_type.link}
              variant={type === 'light' ? button_variant.secondary : button_variant.primary}
            >
              {button.text}
            </Button>
          </div>
        )}
      </div>
      {
        image && (
          <div
            className={style.image_block}
            style={image.type === 'bg' ? {...BG_STYLES} : undefined }
          >
            <Image
              src={image.url}
              alt={'Image'}
              layout={image.type === 'bg' && "fill"}
              objectFit="cover"
            />
          </div>
        )
      }
    </div>
  );
};

export default Banner;
