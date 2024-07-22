import React from 'react';
import Image from "next/image";
import cn from 'classnames'

import {CheckboxType} from "../../../shared/ui/checkbox/checkbox.type";
import {ICONS_MAP} from "../../../constants/icon/icon";
import style from './checkbox.module.scss';

const Checkbox = (
  {
    title,
    value,
    onChange
  }: CheckboxType
) => {
  return (
    <div className={style.wrapper} onClick={() => onChange(!value)}>
      <label className={style.label} htmlFor={title}>
        {title}
      </label>
      <div className={cn(style.checkbox, value && style.checkbox_active)}>
        {value && (
          <div className={style.check}>
            <Image
              src={ICONS_MAP.check}
              layout={'fill'}
              alt={'check'}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
