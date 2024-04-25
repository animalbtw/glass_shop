import React from 'react';

import style from './container.module.scss'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={style.wrapper}>
      {children}
    </div>
  );
};

export default Container;
