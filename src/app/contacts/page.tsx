import React from 'react';

import Container from "@/widgets/container/container";
import Breadcrumbs from "@/shared/ui/breadcrumbs/breadcrumbs";
import Banner from "@/widgets/banner/banner";
import {button_type} from "@/shared/ui/button/button.type";
import banner_bg from '../../assets/pic/contacts/contacts_banner.png'
import style from './page.module.scss'
import dark_image from "@/assets/pic/banner/darkbanner.png";
import Tabs from "@/widgets/tabs/tabs";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Точная оптика | Контакты',
}

const ContactsPage = () => {
  return (
    <Container>
      <div className={style.contacts_wrapper}>
        <Breadcrumbs
          chain={[
            {
              text: 'Главная',
              href: '/'
            },
            {
              text: 'Контакты',
              href: ''
            }
          ]}
        />
        <div className={style.contacts_title}>
          Контакты
        </div>
        <div className={style.contacts_subtitle}>
          Адреса салонов
        </div>
        <div className={style.container}>
          <Tabs />
        </div>
        <div className={style.banner}>
          <Banner
            type={'light'}
            title={'Позвоните нам!'}
            description={'Сюда нужен текст для карточки, стимулирующей людей позвонить на горячую линию и записаться на приём'}
            // background={'linear-gradient(90deg, #FFF 32.53%, rgba(255, 255, 255, 0.00) 88.59%);'}
            button={{
              text: '+7 (495) 229-09-11',
              type: button_type.link,
              href: ''
            }}
            // image={{url: banner_bg, type: 'bg'}}
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactsPage;
