import Link from 'next/link';
import React from 'react';

const Pagination = () => {
    return (
        <div>
            <Link href={''}>
                ←
            </Link>
            <Link href={''}>
                1
            </Link>
            <Link href={''}>
                2
            </Link>
            <Link href={''}>
                3
            </Link>
            <Link href={''}>
                4
            </Link>
            <Link href={''}>
                5
            </Link>
            <Link href={''}>
                →
            </Link>
        </div>
    );
};

export default Pagination;