import {useState} from "react";

import css from "./CustomSelect.module.css";
const CustomSelect = ({options, value, onChange}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        onChange({...value, ...option});
        setIsOpen(false);
    };

    return (
        <div className={css.custom_select}>
            <div
                className={css.selected_option}
                onClick={() => setIsOpen(!isOpen)}
            >
                {value.cc}
            </div>
            {isOpen && (
                <div className={css.options}>
                    {options.map((option) => (
                        <div
                            className={css.option}
                            key={option.r030}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.cc}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default CustomSelect;