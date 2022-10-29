import { useState, useEffect } from "react";

export const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(true);
    const [isMinLengthError, setMinLengthError] = useState(false);
    const [isMaxLengthError, setMaxLengthError] = useState(false);
    const [isEmailError, setEmailError] = useState(false);
    const [inputValid, setInputValid] = useState(false);
    
    useEffect( ()=> {
        if(value) {
            for (const validation in validations) {
                switch(validation) {
                    case 'minLength':
                        value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                        break;
                    case 'maxLength':
                        value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
                        break;
                    case 'isEmpty':
                        value ? setEmpty(false) : setEmpty(true);
                        break;
                    case 'isEmail':
                        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                        break;
                    default:
                        // do nothing: 
                } 
            }
        }
    }, [value])

    useEffect( ()=> {
        if(isEmpty || isMinLengthError || isMaxLengthError || isEmailError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    },[isEmpty, isMinLengthError, isMaxLengthError, isEmailError])

    return {
        isEmpty,
        isMinLengthError,
        isMaxLengthError,
        isEmailError,
        inputValid,
    }
}

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onBlur = (e) => {
        setDirty(true)
    }
    
    useEffect( ()=> {
        setValue(initialValue)
    },[initialValue])
    
    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
    }
}
