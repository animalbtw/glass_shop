import React from "react";
import Image from "next/image";
import { Metadata } from "next";

import Container from "../../../widgets/container/container";
import Breadcrumbs from "../../../shared/ui/breadcrumbs/breadcrumbs";
import Chess from "../../../widgets/chess/chess";
import Banner from "../../../widgets/banner/banner";
import { button_type } from "../../../shared/ui/button/button.type";
import article_content from "../../../assets/pic/article/article_content.png";
import dark_banner from "../../../assets/pic/banner/dark_banner.png";
import leftSide from "../../../assets/pic/article/Q_BannerLeftImage.png";
import rightSide from "../../../assets/pic/article/Q_BannerRightImage.png";
import wide_pic from "../../../assets/pic/article/A_ArticlePictureWide.png";
import doc from "../../../assets/pic/article/Q_BannerPersonImage.png";
import style from '../../../assets/styles/article_slug.module.scss'

export const metadata: Metadata = {
  title: "Точная оптика | Статья",
};

const Article = () => {
  const gradient = `radial-gradient(279.09% 305.69% at 10.56% 109.09%, #2B8B7C 0%, rgba(43, 139, 124, 0.00) 100%)`;

  return (
    <div className={style.wrapper}>
      <div className={style.page_title}>
        <div style={{ left: 0, zIndex: "0" }} className={style.image_container}>
          <Image src={leftSide} alt={"img"} />
        </div>
        <div
          style={{ right: 0, zIndex: "0" }}
          className={style.image_container}
        >
          <Image src={rightSide} alt={"img"} />
        </div>
        <div
          style={{ left: "65%", bottom: 0, zIndex: "0" }}
          className={style.image_container}
        >
          <Image src={doc} alt={"img"} />
        </div>
        <div className={style.page_title_container}>
          <div className={style.breadcrumbs}>
            <Breadcrumbs
              chain={[
                { text: "Главная", href: "/" },
                { text: "Диагностика зрения", href: "" },
              ]}
            />
          </div>
          <div className={style.title_content}>Диагностика зрения</div>
        </div>
      </div>
      <div className={style.page_subtitle}>
        <div className={style.page_subtitle_container}>
          <div className={style.subtitle_content}>
            Каждое обследование глаз в наших оптиках проводится на современном
            высокоточном оборудовании, в соответствии с вашими индивидуальными
            потребностями и мерами безопасности в связи с COVID-19
          </div>
        </div>
      </div>
      <div className={style.container_wrapper}>
        <Container>
          <div className={style.chess}>
            <Chess
              title={"Ваше здоровье и безопасность превыше всего"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci cum cumque eligendi eveniet, libero provident vero voluptatum! Laboriosam, ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci cum cumque eligendi eveniet, libero provident vero voluptatum! Laboriosam, ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci cum cumque eligendi eveniet, libero provident vero voluptatum! Laboriosam, ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci cum cumque eligendi eveniet, libero provident vero voluptatum! Laboriosam, ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci cum cumque eligendi eveniet, libero provident vero voluptatum! Laboriosam, ullam."
              }
              //@ts-ignore
              image={article_content}
            />
          </div>
          <div className={style.image_banner}>
            <Image src={wide_pic} layout={"fill"} alt={"img"} />
          </div>
          <div className={style.benefits}>
            <ul>
              <li className={style.benefit}>
                <div className={style.benefit_text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur consequuntur fuga mollitia quaerat quis ratione.
                </div>
              </li>
              <li className={style.benefit}>
                <div className={style.benefit_text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur consequuntur fuga mollitia quaerat quis ratione.
                </div>
              </li>
              <li className={style.benefit}>
                <div className={style.benefit_text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur consequuntur fuga mollitia quaerat quis ratione.
                </div>
              </li>
            </ul>
            <ul>
              <li className={style.benefit}>
                <div className={style.benefit_text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur consequuntur fuga mollitia quaerat quis ratione.
                </div>
              </li>
              <li className={style.benefit}>
                <div className={style.benefit_text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur consequuntur fuga mollitia quaerat quis ratione.
                </div>
              </li>
              <li className={style.benefit}>
                <div className={style.benefit_text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur consequuntur fuga mollitia quaerat quis ratione.
                </div>
              </li>
            </ul>
          </div>
          <div className={style.chess}>
            <Chess
              title={"lorem"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid at, corporis dolorem eaque error exercitationem illo inventore ipsum laborum magnam maxime, nisi optio sapiente totam vel veritatis vero. Aspernatur assumenda deleniti dolor dolorum eveniet harum ipsa maiores nesciunt nisi numquam omnis pariatur, possimus quia quibusdam repellendus repudiandae sequi veritatis?"
              }
            />
          </div>
          <div className={style.placeholder_images}>
            <Image alt={"Image"} src={article_content} />
            <Image alt={"Image"} src={article_content} />
          </div>
          <div className={style.chess}>
            <Chess
              title={"lorem"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid at, corporis dolorem eaque error exercitationem illo inventore ipsum laborum magnam maxime, nisi optio sapiente totam vel veritatis vero. Aspernatur assumenda deleniti dolor dolorum eveniet harum ipsa maiores nesciunt nisi numquam omnis pariatur, possimus quia quibusdam repellendus repudiandae sequi veritatis?"
              }
            />
          </div>
          <div className={style.banner}>
            <Banner
              title={"Диагностика зрения"}
              description={
                "У вас есть сомнения в качестве своего зрения? Мы предлагаем вам бесплатную первичную диагностику в нашей оптике!"
              }
              type={"dark"}
              background={gradient}
              //@ts-ignore
              image={{ url: dark_banner, type: "default" }}
              button={{
                text: "Записаться на приём",
                href: "/",
                type: button_type.link,
              }}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Article;
