import React from "react";
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import style from "../../../styles/Menu.module.scss";
import Button from '@material-ui/core/Button';

const MenuDialog = ({ title, image, description, price, onClose, open }) => {

    return (
        <>

            <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>

                <div className={style.modal}>
                    <h1 className={style.modalTitle}>{title}</h1>
                    <p className={style.modalImg}>{image}</p>
                    <p className={style.modalDescription}>{description}</p>
                    <p className={style.modalPricce}>{price}</p>
                </div>

            </Dialog>
        </>

    );
};

MenuDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default MenuDialog;


