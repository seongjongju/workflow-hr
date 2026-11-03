'ue client';
import React, { ReactNode } from 'react';

interface ModalProps {
    empoloyCreate: ReactNode;
    modalHide: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({ empoloyCreate, modalHide }: ModalProps) => {
    return (
        <div id='com-modal'>
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