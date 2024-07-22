"use client";

import ReactDOM from "react-dom";
import Image from "next/image";

import close from "../../assets/pic/modal/exit.svg";
import style from "./modal.module.scss";
import Button from "../../shared/ui/button/button";
import Input from "../../shared/ui/input/Input";
import InputDropdown from "../../shared/ui/input-dropdown/InputDropdown";
import { SERVICE_OPTIONS, TIME_OPTIONS } from "../../constants/select-constants";
import Datepicker from "../../shared/ui/datepicker/datepicker";
import { button_variant } from "../../shared/ui/button/button.type";
import { useState } from "react";
import { useAppContext } from "../../context";

type ModalProps = {
};

export default function Modal(props: ModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { setModalOpen } = useAppContext();

  const closeHandler = () => {
    setModalOpen(false)
  };

  return ReactDOM.createPortal(
    <div className={style.modal_wrapper}>
      <div className={style.container} onMouseDown={(e) => e.stopPropagation()}>
        <div className={style.modal_head}>
          <div className={style.title}>Запись</div>
          <div className={style.exit} onClick={closeHandler}>
            <Image layout={"fill"} src={close} alt={"close"} />
          </div>
        </div>
        <div className={style.modal_body}>
          <div className={style.field}>
            <div className={style.field_title}>Услуга</div>
            <div className={style.field_body}>
              <InputDropdown
                options={SERVICE_OPTIONS}
                placeholder={"Выберите услугу..."}
              />
            </div>
          </div>
          <div className={style.field}>
            <div className={style.field_title}>Адрес клиники</div>
            <div className={style.field_body}>
              <InputDropdown options={[]} placeholder={"Выберите клинику..."} />
            </div>
          </div>
          <div className={style.double_field}>
            <div className={style.field}>
              <div className={style.field_title}>Дата записи</div>
              <div className={style.field_body}>
                <Datepicker />
              </div>
            </div>
            <div className={style.field}>
              <div className={style.field_title}>Время записи</div>
              <div className={style.field_body}>
                <InputDropdown options={TIME_OPTIONS} placeholder={"12:00"} />
              </div>
            </div>
          </div>

          <div className={style.field}>
            <div className={style.field_title}>Имя</div>
            <div className={style.field_body}>
              <Input
                className={style.input}
                isIcon={false}
                value={name}
                setValue={(value) => setName(value)}
                placeholder="Введите имя"
              />
            </div>
          </div>
          <div className={style.field}>
            <div className={style.field_title}>Номер телефона</div>
            <div className={style.field_body}>
              <Input
                className={style.input}
                isPhone
                isIcon={false}
                value={phone}
                setValue={(value) => setPhone(value)}
                placeholder="(___) ___-__-__"
              />
            </div>
          </div>
          <div className={style.action}>
            <Button variant={button_variant.secondary}>Записаться</Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
