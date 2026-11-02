import { LabelType } from '@/shared/Types/commonType';
import React from 'react';

const Label = ({htmlFor, text}: LabelType) => {
    return (
        <label 
            className='label'
            htmlFor={htmlFor}
        >
            {text}
        </label>
    );
};

export default Label;