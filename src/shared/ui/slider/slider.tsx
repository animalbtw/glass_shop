"use client";
import { SliderType } from "./slider.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import cn from "classnames";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import style from "./slider.module.scss";
import { SwiperModule } from "swiper/types";

export function Slider(props: SliderType) {
  const {
    swiperClassName,
    slides,
    slidesPerView = 4,
    isPagination = false,
    isNavigation = true,
    slidesGap,
  } = props;

  // eslint-disable-next-line @next/next/no-assign-module-variable
  const module = [
    ...isPagination ? [Pagination] : [],
    ...isNavigation ? [Navigation] : [],
  ] as SwiperModule[]

  return (
    <Swiper
      className={cn(style.swiper_wrapper, swiperClassName)}
      modules={module}
      slidesPerView={slidesPerView}
      navigation={isNavigation}
      pagination={{ clickable: isPagination }}
      spaceBetween={slidesGap}
      loop
    >
      {slides && slides.map((slide, index) => <SwiperSlide key={index}>{slide}</SwiperSlide>)}
    </Swiper>
  );
}
