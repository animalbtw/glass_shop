import React from 'react';
import Image from "next/image";

import {PersonalCardType} from "./personal-card.type";
import personal from '../../assets/pic/personal/personal.png'
import big_personal from '../../assets/pic/personal/Q_AboutContentSpecialistsCardsMainPic.png'
import style from './personal-card.module.scss'

const PersonalCard = (
  {
    size = 's'
  }: PersonalCardType
) => {
  if (size === 'l') {
    return (
      <div className={style.large_wrapper}>
        <div className={style.large_image}>
          <Image
            src={big_personal}
            alt={'Image'}
          />
        </div>
        <div className={style.large_info}>
          <div className={style.large_name}>
            Фёдоров Евгений Константинович
          </div>
          <div className={style.large_position}>
            Врач-офтальмолог, Москва
          </div>
          <div className={style.large_description}>
            Прием детей, подбор очков, подбор контактных линз: ортокератологические, склеральные, мягкие,
            мультифокальные
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={style.wrapper}>
      <div className={style.image}>
        <Image
          src={personal}
          alt={'Image'}
        />
      </div>
      <div className={style.info}>
        <div className={style.name}>
          Фёдоров Евгений Константинович
        </div>
        <div className={style.position}>
          Врач-офтальмолог, Москва
        </div>
        <div className={style.description}>
          Прием детей, подбор очков, подбор контактных линз: ортокератологические, склеральные, мягкие, мультифокальные
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
