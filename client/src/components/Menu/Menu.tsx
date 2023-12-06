import React, { useState } from "react";
import styles from "./Menu.module.css";

import Image from "next/image";
import logo from "../../../public/Tractorelogo.png";

//fontawsome
import Icon from "@/components//fontawsome/Icon";
import {
  faBasketShopping,
  faSearch,
  faArrowLeft,
  faArrowDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface contentInterface {
  title: string;
  hasSubMenu: boolean;
}

function Menu() {
  const [content, setContent] = useState<contentInterface[]>([
    { title: "خانه", hasSubMenu: true },
    { title: "صنایع", hasSubMenu: true },
    { title: "مطالعه", hasSubMenu: true },
    { title: "بلاگ", hasSubMenu: true },
    { title: "فروشگاه", hasSubMenu: false },
  ]);

  const [iconsBtn, setIconsBtn] = useState<any>([
    { iconName: faSearch },
    { iconName: faBasketShopping },
    { iconName: faBars },
  ]);

  return (
    <div className={styles.dvMenu}>
      <div className={styles.menu}>
        <div className={styles.dvLogo}>
          <Image
            src={logo}
            width={250}
            height={45}
            alt=""
            className={styles.img}
          />
        </div>

        <div className={styles.dvContent}>
          {content.map((item, index) => (
            <>
              <p key={index} className={styles.contentItem}>
                {item.title}
                {item.hasSubMenu && (
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className={styles.icons}
                  />
                )}
              </p>
            </>
          ))}
        </div>

        {iconsBtn.map((item: any, index: number) => (
          <div key={index} className={styles.dvBtns}>
            <Icon
              icon={item.iconName}
              color="bdbdbd"
              size="20px"
              margin="0px"
              mouseOverColor="#0C95EC"
            />
          </div>
        ))}

        <div className={styles.getQoets}>
          <p className={styles.quotesText}>مشاوره</p>
          <Icon
            icon={faArrowLeft}
            color="white"
            size="14px"
            margin="0px 10px 0 0"
            mouseOverColor="white"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;

