"use client";

import React, { LegacyRef, useState } from "react";
import Image from "next/image";

import Toggle from "../../../../../../widgets/catalog/ui/list/ui/sorting/ui/toggle/toggle";
import { ICONS_MAP } from "../../../../../../constants/icon/icon";
import { SortingType } from "../../../../../../widgets/catalog/ui/list/ui/sorting/sorting.type";
import style from "./sorting.module.scss";

const Sorting = (props: SortingType) => {
  const [isOpen, setOpen] = useState(false);
  // const ref = useClickOutside(() => setOpen(false), isOpen) as LegacyRef<HTMLDivElement> | undefined

  return (
    <div className={style.container}>
      <div className={style.wrapper} onClick={() => setOpen(!isOpen)}>
        <div className={style.type_icon}>
          <Image src={ICONS_MAP.sorting} width={22} height={22} alt={"Image"} />
        </div>
        <div className={style.type}>Сначала недорогие</div>
        <div className={style.toggle_icon}>
          <Image
            src={ICONS_MAP.arrowToggle}
            width={14}
            height={11}
            alt={"Image"}
          />
        </div>
      </div>
      {isOpen && (
        <div
          // ref={ref}
          className={style.toggle}
        >
          <Toggle />
        </div>
      )}
    </div>
  );
};

export default Sorting;
