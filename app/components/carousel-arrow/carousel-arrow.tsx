// styles
import styles from "./carousel-arrow.module.scss";

// icons
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

// constants
import { CAROUSEL_IMAGES } from "@/app/constants/carousel-images";

const carouselLoop = (index: number) => {
  if (index >= CAROUSEL_IMAGES.length) {
    index = 0;
  } else if (index < 0) {
    index = CAROUSEL_IMAGES.length - 1;
  }
  return index;
};

export const CarouselArrow = ({
  type,
  setDisplayedIndex,
}: {
  type: string;
  setDisplayedIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <button
        className={`${styles["button"]} ${styles[`button-${type}`]}`}
        onClick={() => {
          type === "previous"
            ? setDisplayedIndex((prev) => carouselLoop(prev - 1))
            : setDisplayedIndex((prev) => carouselLoop(prev + 1));
        }}
      >
        {type === "previous" ? <GrFormPrevious /> : <GrFormNext />}
      </button>
    </>
  );
};
