'use client'

import React from 'react';
import cn from 'classnames'

import {type TabsType} from './tabs.type'
import style from './tabs.module.scss'
import InfoBlock from "@/widgets/info-block/InfoBlock";
import {ICONS_MAP} from "@/constants/icon/icon";
import Button from "@/shared/ui/button/button";
import {button_type, button_variant} from "@/shared/ui/button/button.type";

const Tabs = (
  {
    tabs,
    content
  }: TabsType
) => {
  return (
    <div>
      <div className={style.tabs_wrapper}>
        <div className={cn(style.tabs, style.top_tabs)}>
        <Button onClick={() => null} type={button_type.default} variant={button_variant.primary}>
          Москва
        </Button>
        <Button onClick={() => null} type={button_type.default} variant={button_variant.secondary}>
          Оренбург
        </Button>
        <Button onClick={() => null} type={button_type.default} variant={button_variant.primary}>
          Уфа
        </Button>
        </div>
        <div className={cn(style.tabs, style.bottom_tabs)}>
          <Button onClick={() => null} type={button_type.default} variant={button_variant.secondary}>
            ул. Чкалова, 32
          </Button>
          <Button onClick={() => null} type={button_type.default} variant={button_variant.primary}>
            ул. Чкалова, 32
          </Button>
          <Button onClick={() => null} type={button_type.default} variant={button_variant.primary}>
            ул. Чкалова, 32
          </Button>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.map}>
          <div style={{position: 'relative',overflow: 'hidden'}}><a
            href="https://yandex.ru/maps/org/tochnaya_optika/1203164285/?utm_medium=mapframe&utm_source=maps"
            style={{
              color:'#eee',fontSize:'12px', position:'absolute',top:'0px'}}>Tochnaya optika</a><a
            href="https://yandex.ru/maps/48/orenburg/category/opticial_store/184106052/?utm_medium=mapframe&utm_source=maps"
            style={{color:'#eee',fontSize:'12px',position: 'absolute',top:'14px'}}>Opticial store in Orenburg</a>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=55.134954%2C51.771175&mode=search&oid=1203164285&ol=biz&z=17"
              width="662" height="620" frameBorder="1" allowFullScreen="true" style={{position: 'relative'}}></iframe>
          </div>
        </div>
        <div className={style.description}>
          <InfoBlock icon={ICONS_MAP.phone} text={'+7 (495) 229-09-11'}/>
          <InfoBlock icon={ICONS_MAP.phone} text={'+7 (495) 229-09-11'}/>
          <InfoBlock icon={ICONS_MAP.phone} text={'+7 (495) 229-09-11'}/>
          <InfoBlock icon={ICONS_MAP.phone} text={'+7 (495) 229-09-11'}/>
          <Button
            onClick={() => null}
            type={button_type.default}
            variant={button_variant.secondary}
          >
            Записаться на приём
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
