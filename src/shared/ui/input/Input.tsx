"use client";

import React from "react";
import cn from "classnames";
import InputMask from "react-input-mask";
import { InputTypes } from "@/shared/ui/input/Input.types";
import Image from "next/image";
import { ICONS_MAP } from "@/constants/icon/icon";
import style from "./Input.module.scss";

const Input = ({
  value,
  setValue,
  placeholder,
  className,
  wrapperClassName,
  isIcon = true,
  isPhone = false,
  ...otherProps
}: InputTypes) => {
  if (isPhone) {
    return (
      <InputMask
        alwaysShowMask
        value={value}
        onChange={(e) => setValue(e.target.value)}
        mask={"+7 999 999 99 99"}
        placeholder={placeholder}
        className={cn(style.input, className)}
        {...otherProps}
      />
    );
  }

  return (
    <div className={cn(style.input_wrapper, wrapperClassName)}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cn(style.input, className)}
      />
      {isIcon && (
        <div className={style.icon}>
          <Image alt={"Image"} src={ICONS_MAP.search} width={19} height={19} />
        </div>
      )}
    </div>
  );
};

export default Input;
