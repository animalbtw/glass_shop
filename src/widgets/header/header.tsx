"use client";

import React, { useState } from "react";
import Image from "next/image";

import logotype from "../../assets/pic/logotypes/logotype.svg";
import Nav from "../../widgets/header/ui/nav/nav";
import Input from "../../shared/ui/input/Input";
import style from "./header.module.scss";
import { useAppContext } from "../../context";
import Modal from "../modal/modal";
import LinkKit from "../../shared/ui/link/link";

const Header = () => {
  const [search, setSearch] = useState("");
  const { isModalOpen } = useAppContext();
  return (
    <>
      <header className={style.header}>
        <div className={style.search_block}>
          <LinkKit href="/" className={style.logo}>
            <Image
              alt={"Image"}
              src={logotype}
              layout={"fill"}
              loading={"lazy"}
            />
          </LinkKit>
          <div className={style.search}>
            <Input
              value={search}
              setValue={setSearch}
              placeholder={"поиск"}
              className={style.search_input}
            />
          </div>
        </div>
        <Nav />
      </header>
      {isModalOpen && <Modal />}
    </>
  );
};

export default Header;
