import { ButtonType } from '@/shared/Types/commonType';
import React from 'react';

const MoreVIewButton = ({text, onClick}: ButtonType) => {
    return (
        <button 
            className='more-view'
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default MoreVIewButton;