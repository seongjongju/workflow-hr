import React, { useState } from 'react';

const useViewModalToggle = () => {
    const [viewActive, setViewActive] = useState<boolean>(false);
    
    const viewModalShow = () => {
        setViewActive(true);
    };

    const viewModalHide = () => {
        setViewActive(false);
    };

    return {
        viewModalShow,
        viewModalHide,
        viewActive
    }
};

export default useViewModalToggle;