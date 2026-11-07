import { InputType } from '@/shared/Types/commonType';
import React from 'react';

const Input = ({
    placeholder, 
    type, 
    autocomplete, 
    name, 
    required,
    readonly
}: InputType) => {
    return (
        <input 
            className='text-input'
            autocomplete={autocomplete}
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            readOnly={readonly}
        />
    );
};

export default Input;