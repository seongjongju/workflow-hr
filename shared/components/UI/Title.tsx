import React from 'react';

interface TitleInteface {
    title: string;
};

const Title = ({title}: TitleInteface) => {
    return (
        <h2 className='title'>
            {title}
        </h2>
    );
};

export default Title