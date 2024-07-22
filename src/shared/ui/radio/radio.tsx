import React from 'react';
import cn from 'classnames';

import {RadioType} from "../../../shared/ui/radio/radio.type";
import style from './radio.module.scss';

const Radio = (
  {
    values
  }: RadioType
) => {
  return values.map(({value, text}) => (
    <div
      key={text}
      className={style.wrapper}
    >
      <div className={cn(style.radio, value && style.radio_active)} />
      <label
        className={style.text}
        htmlFor={text}
      >
        {text}
      </label>
    </div>
  ));
};

export default Radio;
