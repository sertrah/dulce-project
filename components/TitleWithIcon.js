import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from "../styles/commons.module.scss";
import Avellanas from "../public/img/Avellanas.svg";

const TitleWithIcon = ({ children, className }) => {
    return (
        <div className={classnames(styles.titleWithIcon, className)}>

            <h2 className={styles.titleWithIcon_title}>{children}</h2>
            
            < Avellanas className={styles.titleWithIcon_logo} />
        </div>
    )
}

TitleWithIcon.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
};
export default TitleWithIcon
