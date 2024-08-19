import React from 'react'
import styles from './Footer.module.css'

function Footer({completed, totalTodos}) {
  return (
    <div className={styles.footer}>
        <span >Completed Todos : {completed} </span>
        <span className={styles.item}> Total Todos : {totalTodos}</span>
    </div>
  )
}

export default Footer