import SuccessButton from '@/shared/components/UI/buttons/SuccessButton';
import Input from '@/shared/components/UI/Input';
import Label from '@/shared/components/UI/Label';
import Select from '@/shared/components/UI/Select';
import { departmentData } from '@/shared/datas/departmentData';
import { positions } from '@/shared/datas/empoloyData';
import React from 'react';
import { fa } from 'zod/locales';

const EmployUpdate = () => {
    return (
        <form className='modal-form'>
            <div className='modal-form__inner'>
                <div className='modal-form__write'>
                    <Label 
                        text='이름' 
                        required={false}
                    />
                    <Input 
                        autocomplete='name'
                        name='name'
                        type='text'
                        placeholder='이름을 입력하세요.'
                        required={false}
                        readonly={true}
                    />
                </div> {/* .modal-form__write : end */}

                <div className='modal-form__write'>
                    <Label 
                        text='연락처' 
                        required={false}
                    />
                    <Input 
                        autocomplete='tel'
                        name='tel'
                        type='tel'
                        placeholder='연락처를 입력하세요. "-"없이 입력'
                        required={false}
                        readonly={true}
                    />
                </div> {/* .modal-form__write : end */}

                <div className='modal-form__write'>
                    <Label 
                        text='이메일' 
                        required={false}
                    />
                    <Input 
                        autocomplete='email'
                        name='email'
                        type='email'
                        placeholder='이메일을 입력하세요.'
                        required={false}
                        readonly={true}
                    />
                </div> {/* .modal-form__write : end */}

                <div className='modal-form__write-x2'>
                    <div className='modal-form__write'>
                        <Label 
                            text='부서' 
                            required={false}
                        />
                        <Select 
                            datas={departmentData}
                            id="departmentCode"
                            value="departmentName"
                            required={false}
                        />
                    </div> {/* .modal-form__write : end */}
                    <div className='modal-form__write'>
                        <Label 
                            text='직급' 
                            required={false}
                        />
                        <Select 
                            datas={positions}
                            id="id"
                            value="position"
                            required={false}
                        />
                    </div> {/* .modal-form__write : end */}
                </div> {/* .modal-form__write-x2 : end */}

                <div className='modal-form__write'>
                    <Label 
                        text='입사일' 
                        required={false}
                    />
                    <input 
                        className='date-input'
                        type="date" 
                        required={false}
                    />
                </div> {/* .modal-form__write : end */}
            </div> {/* .com-modal__inner : end */}

            <SuccessButton 
                text='수정'
            />
        </form>
    );
};

export default EmployUpdate;