import React, { useState } from "react";
import styles from "./Bar.module.css";
import Icon from '@/components/fontawsome/Icon';
import { faPhone, faClock, faMap } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSkype, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

interface ContactItem {
  title: string;
  icon: any;
}

interface IconItem {
  icontitle: any;
}

function Bar() {
  const [contactItems, setContactItems] = useState<ContactItem[]>([
    { title: "09917403979", icon: faPhone },
    { title: "خیابان ولیعصر", icon: faMap },
    { title: "ساعت کاری : 8:00 الی 17:00", icon: faClock },
  ]);

  const [icons, setIcons] = useState<IconItem[]>([
    { icontitle: faLinkedin },
    { icontitle: faSkype },
    { icontitle: faFacebookF },
    { icontitle: faTwitter }
  ]);

  return (
    <>
      <div className={styles.dvBar}>
        <div className={styles.bar}>
          <div className={styles.sides}>
            {contactItems.map((item, index) => (
              <div key={index} className={styles.contacts}>
                <Icon
                  icon={item.icon}
                  color="#0C95EC"
                  size="14px"
                  margin="0px 0 0 5px"
                />
                <p className={styles.contactText}>{item.title}</p>
              </div>
            ))}
          </div>
          <div className={styles.sides}>
            {icons.map((item, index) => (
              <Icon
                key={index}
                icon={item.icontitle}
                color={"#bdbdbd"}
                size={"20px"}
                margin={"0 1.4rem 0 0"}
                mouseOverColor={"#0C95EC"}
              />
            ))}

            <p className={styles.leftSideText}>اخبار و رسانه</p>
            <p className={styles.leftSideText}>ارتباط با ما</p>
            <p className={styles.leftSideText}>حرفه ها</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bar;