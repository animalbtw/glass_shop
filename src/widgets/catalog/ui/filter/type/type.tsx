'use client'

import React, {useState} from 'react';

import style from './type.module.scss';
import Checkbox from "@/shared/ui/checkbox/checkbox";

const Type = () => {
  const [design, setDesign] = useState(false)
  const [med, setMed] = useState(false)
  const [sun, setSun] = useState(false)

  return (
    <div className={style.wrapper}>
      <Checkbox title={'Дизайнерские'} value={design} onChange={val => setDesign(val)} />
      <Checkbox title={'Медицинские'} value={med} onChange={val => setMed(val)} />
      <Checkbox title={'Солнцезащитные'} value={sun} onChange={val => setSun(val)} />
    </div>
  );
};

export default Type;
