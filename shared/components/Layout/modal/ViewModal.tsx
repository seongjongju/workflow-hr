import React, { ReactNode } from 'react';

interface ModalProps {
    empoloyUpdate: ReactNode;
    viewModalHide: React.MouseEventHandler<HTMLButtonElement>;
    maxWidth: string;
}

const ViewModal = ({ 
    empoloyUpdate, 
    viewModalHide,
    maxWidth,
}: ModalProps) => {
    return (
        <div id='com-modal' style={{maxWidth: maxWidth}}>
            <button 
                className='com-modal__close'
                onClick={viewModalHide}
            >
                <span></span>
                <span></span>
            </button>

            {empoloyUpdate}
        </div>
    );
};

export default ViewModal;       