import React, {useState} from 'react';

import css from "./CustomNumberInput.module.css";

const CustomNumberInput = ({inputData, onChange}) => {

    const [showPopup, setShowPopup] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value.startsWith('0') || isNaN(value) || value < 0 || value === '') {
            setShowPopup(true);
            onChange({...inputData, inputValue: ''});
        } else {
            setShowPopup(false);
            onChange({...inputData, inputValue: +value});
        }
    };


    return (
        <div className={css.wrap_input}>
            <input className={css.input}
                   type='number'
                   value={inputData.inputValue}
                   onChange={handleInputChange}
            />

            {showPopup && (
                <div className={css.popup}>
                    <p className={css.popup_text}>Incorrectly entered data</p>
                </div>
            )}
        </div>
    );
}

export default CustomNumberInput;