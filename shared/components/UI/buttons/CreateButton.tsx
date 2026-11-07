import React from 'react';

interface CreateButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CreateButton = ({ onClick }: CreateButtonProps) => {
    return (
        <button 
            className='create-button'
            onClick={onClick}
        >
            사원등록    
        </button>
    );
};

export default CreateButton;