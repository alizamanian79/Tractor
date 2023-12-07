import React, { useState } from "react";
import styles from "./main.module.css";

interface MainMenuProps {
  state: boolean;
  subMenu: any[];
}

function MainMenu({ state, subMenu }: MainMenuProps) {
  
  const [mode, setMode] = useState(state)

function handleMouseIn() {
  setMode(true)
}

  return (
    <div className={mode === false ? styles.mainMenuDeactive : styles.mainMenu} onMouseOver={handleMouseIn}>
      an
      
      {subMenu.map((item)=>(
        <p>{item}</p>
      ))}
      
    </div>
  );
}

export default MainMenu;