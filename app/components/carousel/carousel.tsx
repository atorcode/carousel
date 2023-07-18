"use client";

// styles
import styles from "./carousel.module.scss";

// components
import Image from "next/image";
import { CarouselArrow } from "../carousel-arrow";

// hooks
import { useState } from "react";

// constants
import { CAROUSEL_IMAGES } from "@/app/constants/carousel-images";

export const Carousel = () => {
  const [displayedIndex, setDisplayedIndex] = useState<number>(0);
  return (
    <article>
      <Image
        src={CAROUSEL_IMAGES[displayedIndex]}
        alt=""
        fill
        sizes="100vw"
        className={styles["image"]}
      />
      <CarouselArrow type={"previous"} setDisplayedIndex={setDisplayedIndex} />
      <CarouselArrow type={"next"} setDisplayedIndex={setDisplayedIndex} />
    </article>
  );
};
