import React from "react";
import { Metadata } from "next";
import Image from "next/image";

import Button from "@/shared/ui/button/button";
import { Slider } from "@/shared/ui/slider/slider";
import { button_type, button_variant } from "@/shared/ui/button/button.type";

import homemain from "../assets/pic/home/O_Sec01ContentRight.png";
import pattern from "../assets/pic/home/A_Sec03Background.png";
import mainlogo from "../assets/pic/home/mainlogo.svg";
import eye from "../assets/pic/home/eye.svg";
import empl from "../assets/pic/home/empl.png";
import catalogGlass from "../assets/pic/home/catalogGlass.png";
import posib_img from "../assets/pic/home/posib_img.png";
import link_down from "../assets/pic/home/link_down.svg";
import style from "./page.module.scss";
import { HomePageCatalogSlide } from "@/shared/ui/homePageCatalogSlide/homePageCatalogSlide";
import { EquipmentCard } from "@/widgets/equipment/equipment";

export const metadata: Metadata = {
  title: "Точная оптика",
};

const Page = () => {
  return (
    <div className={style.main_wrapper}>
      <div className={style.main_container}>
        <div className={style.left_part}>
          <div className={style.left_part_header}>
            <Image src={mainlogo} alt={"точная оптика"} layout={"fill"} />
          </div>
          <div className={style.left_part_actions}>
            <Button variant={button_variant.secondary}>Заказать</Button>
            <Button>Записаться на приём</Button>
          </div>
        </div>
        <div className={style.right_part_image}>
          <Image src={homemain} alt={"image"} layout={"fill"} />
        </div>
      </div>
      <div className={style.link_down}>
        <Image alt={""} src={link_down} />
      </div>
      <div className={style.mini_catalog}>
        <div className={style.catalog_title}>Наши оправы</div>
        <div className={style.catalog}>
          <Slider
            isPagination={false}
            slides={[
              <HomePageCatalogSlide
                key={""}
                img={catalogGlass}
                article={"Titanium-5931 C9071"}
                name={"BELLINGER"}
                price={"16 190 ₽"}
              />,
              <HomePageCatalogSlide
                key={""}
                img={catalogGlass}
                article={"Titanium-5931 C9071"}
                name={"BELLINGER"}
                price={"16 190 ₽"}
              />,
              <HomePageCatalogSlide
                key={""}
                img={catalogGlass}
                article={"Titanium-5931 C9071"}
                name={"BELLINGER"}
                price={"16 190 ₽"}
              />,
              <HomePageCatalogSlide
                key={""}
                img={catalogGlass}
                article={"Titanium-5931 C9071"}
                name={"BELLINGER"}
                price={"16 190 ₽"}
              />,
              <HomePageCatalogSlide
                key={""}
                img={catalogGlass}
                article={"Titanium-5931 C9071"}
                name={"BELLINGER"}
                price={"16 190 ₽"}
              />,
              <HomePageCatalogSlide
                key={""}
                img={catalogGlass}
                article={"Titanium-5931 C9071"}
                name={"BELLINGER"}
                price={"16 190 ₽"}
              />,
            ]}
          />
        </div>
        <div className={style.catalog_action}>
          <Button variant={button_variant.secondary}>Перейти в каталог</Button>
        </div>
      </div>
      <div className={style.employee}>
        <div className={style.pattern}>
          <Image alt={"pattern"} src={pattern} layout={"fill"} />
        </div>
        <div className={style.doc}>
          <Image alt={"empl"} src={empl} />
        </div>
        <div className={style.employee_description}>
          <div className={style.emplyee_description_title}>
            Наши специалисты
          </div>
          <div className={style.emplyee_description_sub}>
            В «Точной оптике» работают только квалифицированные и опытные
            специалисты. Информацию о наших достижениях можно прочитать
            на странице «о нас».
          </div>
          <div className={style.emplyee_description_action}>
            <Button>Подробнее о нас</Button>
          </div>
        </div>
      </div>
      <div className={style.eye_health}>
        <div className={style.eye_health_title}>Про здоровье глаз</div>
        <div className={style.eye_health_blocks}>
          <div className={style.eye_health_block}>
            <div className={style.eye_health_block_icon}>
              <Image src={eye} alt={"icon"} />
            </div>
            <div className={style.eye_health_block_title}>
              Диагностика зрения
            </div>
            <div className={style.eye_health_block_description}>
              Диагностика зрения в Точной Оптике
            </div>
            <div className={style.eye_health_block_action}>
              <Button onClick={"() => {}"} type={button_type.link}>
                Подробнее
              </Button>
            </div>
          </div>
          <div className={style.eye_health_block}>
            <div className={style.eye_health_block_icon}>
              <Image src={eye} alt={"icon"} />
            </div>
            <div className={style.eye_health_block_title}>
              Диагностика зрения
            </div>
            <div className={style.eye_health_block_description}>
              Диагностика зрения в Точной Оптике
            </div>
            <div className={style.eye_health_block_action}>
              <Button onClick={"() => {}"} type={button_type.link}>
                Подробнее
              </Button>
            </div>
          </div>
          <div className={style.eye_health_block}>
            <div className={style.eye_health_block_icon}>
              <Image src={eye} alt={"icon"} />
            </div>
            <div className={style.eye_health_block_title}>
              Диагностика зрения
            </div>
            <div className={style.eye_health_block_description}>
              Диагностика зрения в Точной Оптике
            </div>
            <div className={style.eye_health_block_action}>
              <Button onClick={""} type={button_type.link}>
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.equipment}>
        <div className={style.equipment_title}>Наше оборудование</div>
        <div className={style.equipment_blocks}>
          <Slider
            slidesGap={48}
            slides={[
              <EquipmentCard key={""} />,
              <EquipmentCard key={""} />,
              <EquipmentCard key={""} />,
              <EquipmentCard key={""} />,
              <EquipmentCard key={""} />,
            ]}
          />
        </div>
      </div>
      <div className={style.possibilities}>
        <div className={style.possibilities_title}>
          Множество возможностей «Точной Оптики»
        </div>
        <div className={style.possibilities_blocks}>
          <div className={style.possibilities_block}>
            <div className={style.possibilities_block_image}>
              <Image src={posib_img} alt={"possibilities_block_image"} />
            </div>
            <div className={style.possibilities_block_title}>Очки</div>
          </div>
          <div className={style.possibilities_block}>
            <div className={style.possibilities_block_image}>
              <Image src={posib_img} alt={"possibilities_block_image"} />
            </div>
            <div className={style.possibilities_block_title}>Очки</div>
          </div>
          <div className={style.possibilities_block}>
            <div className={style.possibilities_block_image}>
              <Image src={posib_img} alt={"possibilities_block_image"} />
            </div>
            <div className={style.possibilities_block_title}>Очки</div>
          </div>
          <div className={style.possibilities_block}>
            <div className={style.possibilities_block_image}>
              <Image src={posib_img} alt={"possibilities_block_image"} />
            </div>
            <div className={style.possibilities_block_title}>Очки</div>
          </div>
          <div className={style.possibilities_block}>
            <div className={style.possibilities_block_image}>
              <Image src={posib_img} alt={"possibilities_block_image"} />
            </div>
            <div className={style.possibilities_block_title}>Очки</div>
          </div>
          <div className={style.possibilities_block}>
            <div className={style.possibilities_block_image}>
              <Image src={posib_img} alt={"possibilities_block_image"} />
            </div>
            <div className={style.possibilities_block_title}>Очки</div>
          </div>
          <div className={style.possibilities_block}>
            <div className={style.possibilities_block_image}>
              <Image src={posib_img} alt={"possibilities_block_image"} />
            </div>
            <div className={style.possibilities_block_title}>Очки</div>
          </div>
          <div className={style.possibilities_block}>
            <div className={style.possibilities_block_image}>
              <Image src={posib_img} alt={"possibilities_block_image"} />
            </div>
            <div className={style.possibilities_block_title}>Очки</div>
          </div>
          <div className={style.possibilities_block}>
            <div className={style.possibilities_block_image}>
              <Image src={posib_img} alt={"possibilities_block_image"} />
            </div>
            <div className={style.possibilities_block_title}>Очки</div>
          </div>
          <div className={style.possibilities_block}>
            <div className={style.possibilities_block_image}>
              <Image src={posib_img} alt={"possibilities_block_image"} />
            </div>
            <div className={style.possibilities_block_title}>Очки</div>
          </div>
          <div className={style.possibilities_block}>
            <div className={style.possibilities_block_image}>
              <Image src={posib_img} alt={"possibilities_block_image"} />
            </div>
            <div className={style.possibilities_block_title}>Очки</div>
          </div>
          <div className={style.possibilities_block}>
            <div className={style.possibilities_block_image}>
              <Image src={posib_img} alt={"possibilities_block_image"} />
            </div>
            <div className={style.possibilities_block_title}>Очки</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
