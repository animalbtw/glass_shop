import React from 'react';
import style from './InfoBlock.module.scss'
import Image from "next/image";

const InfoBlock = ({
                     icon,
                     text
                   }: { icon: string, text: string }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.icon}>
        <Image src={icon} width={24} height={24}/>
      </div>
      <div className={style.text}>{text}</div>
    </div>
  );
};

export default InfoBlock;
