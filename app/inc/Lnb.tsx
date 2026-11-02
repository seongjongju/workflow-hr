'use client';
import React, { useEffect, useState } from 'react';
import './styles/style.css';
import { useSession } from 'next-auth/react';
import { redirect, usePathname } from 'next/navigation';
import Link from 'next/link';
import Gnb from './components/UI/Gnb';
import My from './components/UI/My';
import Loading from '@/shared/components/UI/Loading';

const Lnb = () => {
    const pathname = usePathname();
    const {data: session, status} = useSession();

    const [toggle, setToggle] = useState<boolean>(false); //LNB 열림/닫힘

    //LNB 열림/닫힘
    const handleClickToggleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setToggle(prev => !prev);
    };

    if(pathname === "/") return null;
    if(!session) return <Loading />;

    return (
        <div 
            id='lnb'
            className={!toggle ? "" : "is-hide"}
        >
            <h1 
                className='lnb__logo'
            >
                <Link href={"/home"}>
                    WorkFlow HR
                </Link>
            </h1>

            <div className='lnb__scroll'>
                <My 
                    user={session?.user}
                />

                <Gnb />
            </div> {/* .lnb__scroll : end */}

            <button 
                className={`lnb__toggle ${!toggle ? "" : "is-active"}`} 
                title='메뉴닫기/열기'
                onClick={handleClickToggleButton}
            >
                <div className='lnb__toggle--arrow'>
                    <span></span>
                    <span></span>
                </div>
            </button> {/* .lnb__toggle : end */}
        </div>
    );
};

export default Lnb;