'use client'

import React, {useState} from 'react';
import Image from "next/image";

import logotype from '../../assets/pic/logotypes/logotype.svg';
import Nav from "@/widgets/header/ui/nav/nav";
import Input from "@/shared/ui/input/Input";
import style from './header.module.scss';

const Header = () => {
  const [search, setSearch] = useState('');
  return (
    <header className={style.header}>
      <div className={style.search_block}>
        <div className={style.logo}>
          <Image alt={'Image'} src={logotype} layout={'fill'} loading={'lazy'}/>
        </div>
        <div className={style.search}>
          <Input
            value={search}
            setValue={setSearch}
            placeholder={'поиск'}
            className={style.search_input}
          />
        </div>
      </div>
      <Nav/>
    </header>
  );
};

export default Header;
