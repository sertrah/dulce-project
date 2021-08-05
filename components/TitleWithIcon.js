import React from 'react'
import styles from "../styles/commons.module.scss";
import Avellanas from "../public/img/Avellanas.svg";

export default function TitleWithIcon({ children }) {
    return (
        <div className={styles.titleWithIcon}>
            <h2 className={styles.titleWithIcon_title}>{children}</h2>
            < Avellanas className={styles.titleWithIcon_logo} />
        </div>
    )
}
