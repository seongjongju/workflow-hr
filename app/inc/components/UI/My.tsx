import Myface from '@/shared/components/UI/Myface';
import { UserInterface } from '@/shared/Types/userInterface';
import Image from 'next/image';
import React from 'react';

const My = ({user}: UserInterface) => {
    return (
        <div className='my'>
            <Myface />

            <h5 className='my__name'>{user?.name} {user?.position}</h5>

            <div className='my__info'>
                <p className='my__info--text'>
                    부서: {user?.department}
                </p>
                <span className='my__info--line'></span>
                <p className='my__info--text'>
                    사원번호: {user?.employeeId}
                </p>
            </div> {/* .my__info : end */}
        </div>
    );
};

export default My;