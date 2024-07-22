import React from 'react';

import Nav from "../../../widgets/footer/ui/nav/nav";
import style from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.menu}>
          <Nav/>
        </div>
      </div>
      <div className={style.caution}>
        ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ. НЕОБХОДИМО ПРОКОНСУЛЬТИРОВАТЬСЯ СО СПЕЦИАЛИСТОМ
      </div>
      <div className={style.description}>
        <div className={style.description_container}>
          <div className={style.item}>
            © tochnayaoptika, 2023
          </div>
          <div className={style.item}>
            Программа лояльности ТОЧНАЯ ОПТИКА
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
