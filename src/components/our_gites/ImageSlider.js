import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "@/styles/our_gites/ImageSlider.module.css";

const ImageSlider = (props) => {
  const [drag, setDrag] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const onMouseMove = (e) => {
    if (e.button !== 0) return;
    setDrag(true);
  };

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    setDrag(false);
  };

  const onMouseUp = (e, index) => {
    if (e.button !== 0) return;

    if (!drag) props.sliderClicked(index);
  };

  return (
    <div className={`slider-wrap ${styles.sliderContainer}`}>
      <Slider {...settings}>
        {props.images.map((img, index) => (
          <div className={styles.imageContainer} key={`${index} container`}>
            <Image
              key={index}
              src={props.images[index].derivatives.large.url}
              onMouseDown={(e) => onMouseDown(e)}
              onMouseMove={(e) => onMouseMove(e)}
              onMouseUp={(e) => onMouseUp(e, index)}
              sizes="(min-width: 992px) 50vw, (min-width: 1500px) 33vw, 100vw"
              fill
              alt={`Thumbnail of ${img}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
