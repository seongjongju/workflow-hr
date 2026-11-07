import React, { useState } from 'react';

const useModalToggle = () => {
    const [active, setActive] = useState<boolean>(false);

    const modalShow = () => {
        setActive(true);
    };

    const modalHide = () => {
        setActive(false);
    };

    return {
        modalShow,
        modalHide,
        active
    }
};

export default useModalToggle;