import React from "react";
import PropTypes from 'prop-types';

const Modal = ({ title, handleClose, body }) => {
    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__header">
                    <h2>{title}</h2>
                    <button onClick={handleClose}>X</button>
                </div>
                <p className="modal__body">{body}</p>
                <div className="modal__footer">
                    <button onClick={handleClose}>OK</button>
                </div>
            </div>
        </div>
    );
};


export default Modal;

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
    body: PropTypes.string.isRequired,
};