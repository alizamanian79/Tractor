import React, { useState } from "react";
import styles from "./Menu.module.css";

import Image from "next/image";
import logo from "../../../public/Tractorelogo.png";

import MainMenu from "./main/MainMenu";

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
  subMenu: any[];
}

function Menu() {
  const [content, setContent] = useState<contentInterface[]>([
    {
      title: "خانه",
      hasSubMenu: true,
      subMenu: ["salam", "تست دوم ", "تست سوم"],
    },
    {
      title: "صنایع",
      hasSubMenu: true,
      subMenu: ["تست اول", "تست دوم ", "تست سوم"],
    },
    {
      title: "مطالعه",
      hasSubMenu: true,
      subMenu: ["تست اول", "تست دوم ", "تست سوم"],
    },
    {
      title: "بلاگ",
      hasSubMenu: true,
      subMenu: ["تست اول", "تست دوم ", "تست سوم"],
    },
    {
      title: "فروشگاه",
      hasSubMenu: false,
      subMenu: [],
    },
  ]);
  const [iconsBtn, setIconsBtn] = useState<any>([
    { iconName: faSearch },
    { iconName: faBasketShopping },
    { iconName: faBars },
  ]);

  const [isHover, setIshover] = useState<boolean>(false);
  const [subMenus, setSubMenus] = useState<any[]>([]);

  const handleMouseIN = (hasSubMenu: any) => {
    setIshover(true);
    setSubMenus(hasSubMenu);
  };
  const handleMouseOut = () => {
    setIshover(!isHover);
  };

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
            <ul className={styles.contentItem}>
              <li>
                <p>
                  {item.title}
                  {item.hasSubMenu && (
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className={styles.icons}
                    />
                  )}
                </p>
              </li>
              <div className={styles.dvList}>
                <div className={styles.dvListParts}>
                  <p className={styles.txCol}>ستون اول</p>
                  {item.subMenu.map((item) => (
                    <li className={styles.list}>{item}</li>
                  ))}
                </div>

                <div className={styles.dvListParts}>
                  <p className={styles.txCol}>ستون اول</p>
                  {item.subMenu.map((item) => (
                    <li className={styles.list}>{item}</li>
                  ))}
                </div>

                <div className={styles.dvListParts}>
                  <p className={styles.txCol}>ستون اول</p>
                  {item.subMenu.map((item) => (
                    <li className={styles.list}>{item}</li>
                  ))}
                </div>
              </div>
            </ul>
          ))}
        </div>

        {iconsBtn.map((item: any, index: number) => (
          <>
            <div key={index} className={styles.dvBtns}>
              {index === 1 ? (
                <>
                  <div className={styles.quantity}>0</div>
                </>
              ) : (
                <></>
              )}

              <Icon
                icon={item.iconName}
                color="bdbdbd"
                size="20px"
                margin="0px"
                mouseOverColor="#0C95EC"
              />
            </div>
          </>
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

      {/*  
      <MainMenu state={subMenus == undefined ? false :true} subMenu={subMenus}/> */}
    </div>
  );
}

export default Menu;
