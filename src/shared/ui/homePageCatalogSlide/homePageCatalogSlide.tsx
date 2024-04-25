import Image from 'next/image';
import { homePageCatalogSlideType } from "./homePageCatalogSlide.type";
import style from "./homePageCatalogSlide.module.scss";

export function HomePageCatalogSlide(props: homePageCatalogSlideType) {
  const { img, article, name, price } = props;
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_image}>
        <Image src={img} alt={name} layout={'fill'} />
      </div>
      <div className={style.article}>
        {article}
      </div>
      <div className={style.name}>
        {name}
      </div>
      <div className={style.price}>
        {price}
      </div>
    </div>
  );
}
