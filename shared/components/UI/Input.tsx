import { InputType } from '@/shared/Types/commonType';
import React from 'react';

const Input = ({placeholder, type, autocomplete, name, classname}: InputType) => {
    return (
        <input 
            className={classname}
            autocomplete={autocomplete}
            name={name}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default Input;