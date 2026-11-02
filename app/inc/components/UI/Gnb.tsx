'use client';
import React, { useEffect, useState } from 'react';
import { depths } from '../../depth/depth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Gnb = () => {
    const pathname = usePathname();
    const [id, setId] = useState<string>("");

    //GNB초기화
    useEffect(() => {
        if(pathname === "/home") setId("");
    }, [pathname]);

    //gnb드롭다운
    const handleClickOneDepth = (depId: string) => {
        if(id !== depId) setId(depId);
        else setId(""); 
    };

    return (
        <ul className='gnb'>
            {
                depths.map((dep) => {
                    return (
                        <li 
                            key={dep.id}
                            className='gnb__li'
                        >
                            <button 
                                className={`
                                    one-depth ${dep.id === id || 
                                        dep.twoDepths.find(twoDep => twoDep.path === pathname) ?
                                    "is-active" : ""}
                                `}
                                type='button'
                                onClick={() => handleClickOneDepth(dep.id)}
                            >
                                    {dep.oneDepth}
                                    <div className='gnb__arrows'>
                                        <span></span>
                                        <span></span>
                                    </div>
                            </button>
                            <ul 
                                className={`
                                    gnb__list ${dep.id === id || 
                                        dep.twoDepths.find(twoDep => twoDep.path === pathname) ?
                                    "is-active" : ""}
                                `}
                            >
                                {
                                    dep.twoDepths.map((twoDep) => {
                                        return (
                                            <li 
                                                className='gnb__list-li'
                                                key={twoDep.id}
                                            >
                                                <Link 
                                                    href={twoDep.path} 
                                                    className={`two-depth ${twoDep.path === pathname ? 
                                                        "is-active" : ""}
                                                    `}
                                                >
                                                    {twoDep.twoDepth}
                                                </Link>
                                            </li> /* .gnb__list-li : end */
                                        )
                                    })
                                }
                            </ul> {/* .gnb__list : end */}
                        </li> /* .gnb__li : end */
                    )
                })
            }
        </ul>
    );
};

export default Gnb;