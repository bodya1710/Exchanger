import React, { useState} from 'react';

import CustomSelect from "../CustomSelect/CustomSelect";
import CustomNumberInput from "../CustomNumberInput/CustomNumberInput";
import css from "./Exchange.module.css";

const Exchange = ({data}) => {

    const [firsInput, setFirsInput] = useState({...data[0], inputValue: data[1].rate,  idInput: 1 });
    const [secondInput, setSecondInput] = useState({...data[1], inputValue: data[0].rate, idInput: 2 });

    const handleChange = (option) => {
        if (option.idInput === 1){
            setFirsInput(option);
            setSecondInput(prevState => {return {...prevState, inputValue: countExchange(option.rate, prevState.rate, option.inputValue)}});
        }else if(option.idInput === 2){
            setSecondInput(option);
            setFirsInput(prevState => {return {...prevState, inputValue: countExchange(option.rate, prevState.rate, option.inputValue)}});
        }
    };
    const countExchange = (inputCourse, outputCourse, inputValue) => {
        return (inputCourse / outputCourse * inputValue).toFixed(2);
    };

    return (
             <div className={css.main_container}>
                <h2>Exchange money</h2>
                <div className={css.calculator_controls}>
                    <div className={css.selectdiv}>
                        <CustomSelect
                            options={data}
                            value={firsInput}
                            onChange={handleChange}
                        />
                        <CustomNumberInput
                            inputData={firsInput}
                            onChange={handleChange}
                        />
                        <CustomSelect
                            options={data}
                            value={secondInput}
                            onChange={handleChange}
                        />
                        <CustomNumberInput
                            inputData={secondInput}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

    );
};

export default Exchange;
