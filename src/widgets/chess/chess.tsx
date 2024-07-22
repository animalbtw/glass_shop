import React from 'react';
import Image from "next/image";

import {ChessType} from "../../widgets/chess/chess.type";
import style from './chess.module.scss'

const Chess = ({title, image, description}: ChessType) => {
  return (
    <div className={style.wrapper}>
      <div className={style.title_block}>
        <div className={style.title}>
          {title}
        </div>
        {
          image && (
            <div className={style.image}>
              <Image
                src={image}
                layout={'fill'}
                alt={'Image'}
              />
            </div>
          )
        }
      </div>
      <div className={style.description}>
        {description}
      </div>
    </div>
  );
};

export default Chess;
