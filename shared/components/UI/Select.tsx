import React from 'react';

interface SelectInterface<T> {
    datas: T[];
    id: keyof T;
    value: keyof T;
    required: boolean;
};

const Select = <T,>({datas, id, value, required}: SelectInterface<T>) => {
    return (
        <select className='select' required={required}>
            <option value="">선택</option>
            {
                datas.map((data) => {
                    return (
                        <option 
                            key={String(data[id])}
                            value={String(data[value])}
                        >
                            {String(data[value])}
                        </option>
                    )
                })
            }
        </select>
    );
};

export default Select;