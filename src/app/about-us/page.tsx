import React from 'react';
import Image from "next/image";
import {Metadata} from "next";

import Container from "@/widgets/container/container";
import Breadcrumbs from "@/shared/ui/breadcrumbs/breadcrumbs";
import leftSide from '../../assets/pic/personal/1.svg'
import rightSide from '../../assets/pic/personal/3.svg'
import timeline from '../../assets/pic/personal/timeline.png'
import doc from '../../assets/pic/personal/2.svg'
import cert from '../../assets/pic/certificates/cert.png'
import style from './page.module.scss'
import Banner from "@/widgets/banner/banner";
import dark_banner from "@/assets/pic/banner/dark_banner.png";
import {button_type, button_variant} from "@/shared/ui/button/button.type";
import Button from "@/shared/ui/button/button";
import PersonalCard from "@/widgets/personal-card/personal-card";
import white_image from "@/assets/pic/banner/white_banner.png";

export const metadata: Metadata = {
  title: 'Точная оптика | Статья',
}

const AboutUs = () => {
  const gradient = `radial-gradient(279.09% 305.69% at 10.56% 109.09%, #2B8B7C 0%, rgba(43, 139, 124, 0.00) 100%)`;

  return (
    <div className={style.wrapper}>
      <div className={style.page_title}>
        <div style={{left: 0, zIndex: '0'}} className={style.image_container}>
          <Image src={leftSide} alt={'img'}/>
        </div>
        <div style={{right: 0, top: 0, zIndex: '0'}} className={style.image_container}>
          <Image src={rightSide} alt={'img'}/>
        </div>
        <div style={{left: '50%', bottom: -4, zIndex: '0'}} className={style.image_container}>
          <Image src={doc} alt={'img'}/>
        </div>
        <div className={style.page_title_container}>
          <div className={style.breadcrumbs}>
            <Breadcrumbs chain={[{text: 'Главная', href: '/'}, {text: 'О компании', href: ''}]}/>
          </div>
          <div className={style.title_content}>
            О компании
          </div>
        </div>
      </div>
      <div className={style.page_subtitle}>
        <div className={style.page_subtitle_container}>
          <div className={style.subtitle_content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cupiditate dolor doloremque error
            esse explicabo, magni neque obcaecati odit pariatur quae quas rem sunt, tenetur vel velit veritatis! Error,
            praesentium.
          </div>
        </div>
      </div>
      <div className={style.timeline}>
        <Image src={timeline} alt={'Image'}/>
      </div>
      <div className={style.container_wrapper}>
        <Container>
          <div className={style.personal}>
            <div className={style.block_title}>
              Наши специалисты
            </div>
            <div className={style.personal_container}>
              <div className={style.main_personal_banner}>
                <PersonalCard size={'l'}/>
              </div>
              <div className={style.personal_banners}>
                <PersonalCard/>
                <PersonalCard/>
                <PersonalCard/>
              </div>
            </div>
          </div>
          <div className={style.certificates}>
            <div className={style.block_title}>
              Сертификаты
            </div>
            <div className={style.certificates_content}>
              <Image
                alt={'Image'}
                src={cert}
              />
              <Image
                alt={'Image'}
                src={cert}
              />
              <Image
                alt={'Image'}
                src={cert}
              />
              <Image
                alt={'Image'}
                src={cert}
              />
              <Image
                alt={'Image'}
                src={cert}
              />
              <Image
                alt={'Image'}
                src={cert}
              />
            </div>
            <div className={style.certificates_more}>
              <Button onClick={'/'} type={button_type.link} variant={button_variant.secondary}>
                Смотреть больше
              </Button>
            </div>
          </div>
          <div className={style.reviews}>
            <div className={style.block_title}>
              Отзывы
            </div>
            <div className={style.reviews_content}>
              <div className={style.yandex_widget}></div>
              <div className={style.reviews_body}></div>
            </div>
          </div>
          <div className={style.banner}>
            <Banner
              title={'Диагностика зрения'}
              description={'У вас есть сомнения в качестве своего зрения? Мы предлагаем вам бесплатную первичную диагностику в нашей оптике!'}
              type={'dark'}
              background={gradient}
              image={{url: dark_banner, type: 'default'}}
              button={{
                text: 'Записаться на приём',
                href: '/',
                type: button_type.link,
              }}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
