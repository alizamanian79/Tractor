import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import slide1 from "../../../public/slide1.jpg";
import slide2 from "../../../public/slide2.jpg";


function Header() {
  const [content] = useState([
    {
      title: "ارائه اهداف نوآوری",
      description: "این کپشن هم تست است",
      img: slide1,
    },
    {
      title: "این متن تست است",
      description: "این کپشن هم تست است",
      img: slide2,
    },
  ]);

  const [swiper, setSwiper] = useState<any>(null);
  const autoplayIntervalRef = useRef<any>(null);

  useEffect(() => {
    if (swiper) {
      autoplayIntervalRef.current = setInterval(() => {
        if (swiper.isEnd) {
          swiper.slideTo(0);
        } else {
          swiper.slideNext();
        }
      }, 3000);
    }

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [swiper]);

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <>
      <div className={styles.dvHeader}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {content.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.dvContent}>
                <p className={styles.pTitle}>{item.title}</p>
                <p className={styles.pDescription}>{item.description}</p>
                <div className={styles.dvBtn}>
                  <button className={styles.btn}>سرویس ما</button>
                </div>
              </div>
              <div className={styles.imgClass}>
                <Image src={item.img} width={0} height={0} alt="" className={styles.img} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button onClick={handleNextClick} className={styles.BtnSkip}></button>
        <button onClick={handlePrevClick} className={styles.BtnPrev}></button>
      </div>
    </>
  );
}

export default Header;