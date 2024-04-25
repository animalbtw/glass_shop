import React from 'react';
import {Metadata} from "next";

import Breadcrumbs from "@/shared/ui/breadcrumbs/breadcrumbs";
import Filter from "@/widgets/catalog/ui/filter/filter";
import List from "@/widgets/catalog/ui/list/list";
import Container from "@/widgets/container/container";

import style from './page.module.scss'

export const metadata: Metadata = {
  title: 'Точная оптика | Каталог',
}

const Page = () => {
  return (
    <Container>
      <div className={style.wrapper}>
        <div>
          <Breadcrumbs chain={[
            {text: 'Главная', href: '/'},
            {text: 'Очки', href: '/'},
          ]}/>
        </div>
        <div className={style.page_title}>
          Очки
        </div>
        <div className={style.container}>
          <Filter/>
          <List/>
        </div>
      </div>
    </Container>
  );
};

export default Page;
