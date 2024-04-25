import React from 'react';

import style from './toggle.module.scss';
import Radio from "@/shared/ui/radio/radio";

const Toggle = () => {
  return (
    <div className={style.wrapper}>
      <Radio values={[
        {text: 'Сначала недорогие', value: false},
        {text: 'Сначала дорогие', value: true},
      ]} />
    </div>
  );
};

export default Toggle;
