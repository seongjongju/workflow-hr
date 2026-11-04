import { LabelType } from '@/shared/Types/commonType';
import React from 'react';

const Label = ({htmlFor, text, required}: LabelType) => {
    return (
        <label 
            className='label'
            htmlFor={htmlFor}
        >
            {text}
            {
                required &&
                (
                    <span>*</span>
                )
            }
        </label>
    );
};

export default Label;