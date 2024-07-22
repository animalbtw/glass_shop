'use client'

import { useAppContext } from "../context";
import Button from "../shared/ui/button/button";
import { button_type, button_variant } from "../shared/ui/button/button.type";

import style from './BookingActions.module.scss'

export default function BookingAction() {
  const { setModalOpen } = useAppContext();

  return (
    <div className={style.left_part_actions}>
    <Button
      onClick={"/catalog"}
      type={button_type.link}
      variant={button_variant.secondary}
    >
      Заказать
    </Button>
    <Button onClick={() => setModalOpen(true)}>
      Записаться на приём
    </Button>
  </div>
  )
}