'ue client';
import React, { ReactNode } from 'react';

interface ModalProps {
    empoloyCreate: ReactNode;
    modalHide: React.MouseEventHandler<HTMLButtonElement>;
    maxWidth: string;
}

const Modal = ({ 
    empoloyCreate, 
    modalHide,
    maxWidth,
}: ModalProps) => {
    return (
        <div id='com-modal' style={{maxWidth: maxWidth}}>
            <button 
                className='com-modal__close'
                onClick={modalHide}
            >
                <span></span>
                <span></span>
            </button>

            {empoloyCreate}
        </div>
    );
};

export default Modal;