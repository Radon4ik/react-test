import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import Input from "./Input";

const Application = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleOpen = () => setIsVisible(true);

    const handleClose = () => {
        setIsVisible(false)
    }

    return (
        <div>
            <button onClick={handleOpen}>open modal</button>
            <Input defaultValue="test"/>
            {isVisible && (
                <Modal handleClose={handleClose} title="Are you sure?" body="Lorem" />
            )}
        </div>
    )
};

export default Application;