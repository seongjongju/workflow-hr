import React from 'react';
import EmployList from '../_components/Layout/EmployList';
import Pagination from '@/shared/components/Layout/Pagination';

const ListPage = () => {
    return (
        <main>
            <section>
                <nav className='inner'>
                    <EmployList />
                    <Pagination />
                </nav> {/* .inner : end */}
            </section>
        </main>
    );
};

export default ListPage;