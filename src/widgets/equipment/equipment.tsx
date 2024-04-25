import Image from "next/image";
import { EquipmentCardType } from "./equipment.type";
import equip_pattern from "../../assets/pic/home/equip_pattern.svg";
import equip from "../../assets/pic/home/equip.png";

import style from "./equipment.module.scss";

export function EquipmentCard(props: EquipmentCardType) {
  return (
    <div className={style.equipment_block}>
      <div className={style.equipment_block_pattern}>
        <Image alt={"equip_pattern"} src={equip_pattern} />
      </div>
      <div className={style.equipment_block_img}>
        <Image alt={"equip"} src={equip} />
      </div>
      <div className={style.equipment_block_title}>
        Самая крутая кофеварка в истории
      </div>
      <div className={style.equipment_block_desc}>
        Текст с описанием аппаратуры, где будет более подробная информация
      </div>
    </div>
  );
}
