'use client'

import React, {useState} from 'react';
import Checkbox from "@/shared/ui/checkbox/checkbox";

import style from './age.module.scss'

const Age = () => {
  const [male, setMale] = useState(false)
  const [female, setFemale] = useState(false)
  const [kid, setKid] = useState(false)

  return (
    <div className={style.wrapper}>
      <Checkbox title={'Мужские'} value={male} onChange={val => setMale(val)} />
      <Checkbox title={'Женские'} value={female} onChange={val => setFemale(val)} />
      <Checkbox title={'Детские'} value={kid} onChange={val => setKid(val)} />
    </div>
  );
};

export default Age;
