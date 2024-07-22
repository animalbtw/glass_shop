import React from 'react';
import { Metadata } from 'next';

import Breadcrumbs from "../../shared/ui/breadcrumbs/breadcrumbs";
import Container from "../../widgets/container/container";
import Button from '../../shared/ui/button/button';
import { button_variant } from '../../shared/ui/button/button.type';
import style from '../../assets/styles/slug.module.scss'

export async function generateMetadata({ params }: any) {
  return {
    title: `Точная оптика | ${params?.slug}`,
  }
}

const ItemPage = (props: any = {}) => {
  return (
    <Container>
      <div className={style.pageWrapper}>
        <Breadcrumbs
          chain={[
            {
              text: 'Главная',
              href: '/',
            },
            {
              text: 'Очки',
              href: '/catalog',
            },
            {
              text: props?.params?.slug,
              href: '/',
            },
          ]}
          isPushBack
        />
        <div className={style.item}>
          <div className={style.slider_wrapper}>
            <div className={style.slider}></div> 
            <div className={style.slider_items}>
            <div className={style.slider_item}></div>
            <div className={style.slider_item}></div>
            <div className={style.slider_item}></div>
            <div className={style.slider_item}></div>
              </div> 
          </div> 
          <div className={style.description}>
            <div className={style.name}>GUCCI</div>
            <div className={style.article}>Wire-2 C4696</div>
            <div className={style.price}>160 190 ₽</div>
            <div className={style.actions}>
              <Button
               variant={button_variant.secondary}
              >
                Отложить оправу
              </Button>
              <Button>Записаться на приём</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ItemPage;