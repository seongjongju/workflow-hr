import React from 'react';
import EmployList from '../_components/Layout/EmployList';
import Pagination from '@/shared/components/Layout/Pagination';
import Title from '@/shared/components/UI/Title';

const ListPage = () => {
    return (
        <main>
            <section>
                <nav className='inner'>
                    <Title 
                        title='사원목록'
                    />

                    <EmployList />
                    <Pagination />
                </nav> {/* .inner : end */}
            </section>
        </main>
    );
};

export default ListPage;