import { ButtonType } from '@/shared/Types/commonType';
import React from 'react';

const SuccessButton = ({text, isLoading}: ButtonType) => {
    return (
        <button className={`success-button ${isLoading !== "" ? isLoading : ""}`}>
            {text}
        </button>
    );
};

export default SuccessButton;