import React from 'react'
import styles from './main.module.css'
function MainMenu({state}) {
  return (
    <div className={state===false ?styles.mainMenuDeactive:styles.mainMenu}>
    
  </div>
  )
}

export default MainMenu