'use client';
import Modal from '@/shared/components/Layout/Modal';
import React from 'react';
import EmployCreate from './EmployCreate';
import CreateButton from '@/shared/components/UI/buttons/CreateButton';
import useModalToggle from '@/features/hooks/modal/useModalToggle';

const EmployList = () => {
    const {modalShow, modalHide, active} = useModalToggle();

    return (
        <>
            <CreateButton 
                onClick={modalShow}
            />
            <div className='table-wrap'>
                <table className='com-table'>
                    <thead>
                        <tr>
                            <th>사번</th>
                            <th>이름</th>
                            <th>부서</th>
                            <th>직급</th>
                            <th>이메일</th>
                            <th>연락처</th>
                            <th>입사일</th>
                            <th>재직 상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20260001</td>
                            <td>김대표</td>
                            <td>관리부</td>
                            <td>대표</td>
                            <td>ceo@gmail.com</td>
                            <td>010-0000-0000</td>
                            <td>2026-01-01</td>
                            <td>재직</td>
                        </tr>
                        <tr>
                            <td>20260001</td>
                            <td>김대표</td>
                            <td>관리부</td>
                            <td>대표</td>
                            <td>ceo@gmail.com</td>
                            <td>010-0000-0000</td>
                            <td>2026-01-01</td>
                            <td>재직</td>
                        </tr>
                        <tr>
                            <td>20260001</td>
                            <td>김대표</td>
                            <td>관리부</td>
                            <td>대표</td>
                            <td>ceo@gmail.com</td>
                            <td>010-0000-0000</td>
                            <td>2026-01-01</td>
                            <td>재직</td>
                        </tr>
                        <tr>
                            <td>20260001</td>
                            <td>김대표</td>
                            <td>관리부</td>
                            <td>대표</td>
                            <td>ceo@gmail.com</td>
                            <td>010-0000-0000</td>
                            <td>2026-01-01</td>
                            <td>재직</td>
                        </tr>
                        <tr>
                            <td>20260001</td>
                            <td>김대표</td>
                            <td>관리부</td>
                            <td>대표</td>
                            <td>ceo@gmail.com</td>
                            <td>010-0000-0000</td>
                            <td>2026-01-01</td>
                            <td>재직</td>
                        </tr>
                        <tr>
                            <td>20260001</td>
                            <td>김대표</td>
                            <td>관리부</td>
                            <td>대표</td>
                            <td>ceo@gmail.com</td>
                            <td>010-0000-0000</td>
                            <td>2026-01-01</td>
                            <td>재직</td>
                        </tr>
                        <tr>
                            <td>20260001</td>
                            <td>김대표</td>
                            <td>관리부</td>
                            <td>대표</td>
                            <td>ceo@gmail.com</td>
                            <td>010-0000-0000</td>
                            <td>2026-01-01</td>
                            <td>재직</td>
                        </tr>
                        <tr>
                            <td>20260001</td>
                            <td>김대표</td>
                            <td>관리부</td>
                            <td>대표</td>
                            <td>ceo@gmail.com</td>
                            <td>010-0000-0000</td>
                            <td>2026-01-01</td>
                            <td>재직</td>
                        </tr>
                        <tr>
                            <td>20260001</td>
                            <td>김대표</td>
                            <td>관리부</td>
                            <td>대표</td>
                            <td>ceo@gmail.com</td>
                            <td>010-0000-0000</td>
                            <td>2026-01-01</td>
                            <td>재직</td>
                        </tr>
                        <tr>
                            <td>20260001</td>
                            <td>김대표</td>
                            <td>관리부</td>
                            <td>대표</td>
                            <td>ceo@gmail.com</td>
                            <td>010-0000-0000</td>
                            <td>2026-01-01</td>
                            <td>재직</td>
                        </tr>
                    </tbody>
                </table> {/* .com-table : end */}
            </div>

            {
                active &&
                (
                    <>
                        <div className='dim'></div>
                        <Modal 
                            modalHide={modalHide}
                            empoloyCreate={
                                <EmployCreate 
                                    
                                />
                            }
                        />
                    </>
                )
            }
        </>
    );
};

export default EmployList;