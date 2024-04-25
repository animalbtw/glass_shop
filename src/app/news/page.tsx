import React from 'react';

import Breadcrumbs from "@/shared/ui/breadcrumbs/breadcrumbs";
import Container from "@/widgets/container/container";
import style from './page.module.scss';
import News from "@/widgets/news/news";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Точная оптика | Новости',
}

const NewsPage = () => {
  return (
    <Container>
      <div className={style.news_wrapper}>
        <Breadcrumbs
          chain={[
            {
              text: 'Главная',
              href: '/'
            },
            {
              text: 'Новости',
              href: '/'
            },
          ]}
        />
        <div className={style.page_title}>
          Последние новости
        </div>
        <div className={style.news_block}>
          <div style={{gridArea: 'big'}}>
            <News
              size={'l'}
              entity={{
                id: Math.random() as string,
                title: 'Относительно короткое название новости, которое умещается в две строки',
                date: '14.12.2023'
              }}
            />
          </div>
          <div style={{gridArea: 'medium1'}}>
            <News
              size={'m'}
              entity={{
                id: Math.random() as string,
                title: 'Относительно короткое название новости, которое умещается в две строки',
                date: '14.12.2023'
              }}
            />
          </div>
          <div style={{gridArea: 'medium2'}}>
            <News
              size={'m'}
              entity={{
                id: Math.random() as string,
                title: 'Относительно короткое название новости, которое умещается в две строки',
                date: '14.12.2023'
              }}
            />
          </div>
          <div style={{gridArea: 'small1'}}>
            <News
              size={'s'}
              entity={{
                id: Math.random() as string,
                title: 'Относительно короткое название новости, которое умещается в две строки',
                date: '14.12.2023'
              }}
            />
          </div>
          <div style={{gridArea: 'small2'}}>
            <News
              size={'s'}
              entity={{
                id: Math.random() as string,
                title: 'Относительно короткое название новости, которое умещается в две строки',
                date: '14.12.2023'
              }}
            />
          </div>
          <div style={{gridArea: 'small3'}}>
            <News
              size={'s'}
              entity={{
                id: Math.random() as string,
                title: 'Относительно короткое название новости, которое умещается в две строки',
                date: '14.12.2023'
              }}
            />
          </div>
          <div style={{gridArea: 'small4'}}>
            <News
              size={'s'}
              entity={{
                id: Math.random() as string,
                title: 'Относительно короткое название новости, которое умещается в две строки',
                date: '14.12.2023'
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsPage;
