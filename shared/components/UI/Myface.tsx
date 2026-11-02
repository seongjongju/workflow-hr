'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import noProfile from "@/assets/icons/no-profile.png";

const Myface = () => {
    const {data: session, status} = useSession();

    return (
        <figure className='profile'>
            <div 
                className={`work-state ${session?.user.logged ? "is-logged" : ""}`}
            >
                {/* 
                    출근 여부를 색상으로 표시 
                    출근여부는 logged: true면 출근 false면 부재
                    녹색: 출근
                    빨간색: 부재
                */}
            </div>

            <Image 
                className='profile__image'
                width={60}
                height={60}
                src={session?.user.profile ? session?.user.profile : noProfile}
                alt='프로필이미지'
            />
        </figure> 
    );
};

export default Myface;