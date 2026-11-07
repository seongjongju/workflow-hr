'use client';

import React, { useActionState } from 'react';
import Label from '@/shared/components/UI/Label';
import Input from '@/shared/components/UI/Input';
import SuccessButton from '@/shared/components/UI/buttons/SuccessButton';
import { loginAction, type LoginState } from '@/features/actions/authActions';

const initialState: LoginState = {};

const LoginForm = () => {
    const [state, formAction, isPending] = useActionState(
        loginAction,
        initialState
    );

    return (
        <form 
            className='login__form'
            action={formAction}
        >
            <div className='login__write'>
                <Label 
                    text="아이디"
                    required={true}
                />
                <Input 
                    placeholder='사원번호를 입력하세요'
                    type="text"
                    autocomplete="on"
                    name="id"
                    required={true}
                />
                {state.errors?.id?.map((error, index) => (
                    <p className="error" key={index}>
                        {error}
                    </p>
                ))}
            </div> {/* .login__write : end */}
            <div className='login__write'>
                <Label 
                    text="패스워드"
                    required={true}
                />
                <Input 
                    placeholder='패스워드를 입력하세요'
                    type="password"
                    autocomplete="current-password"
                    name="password"
                    required={true}
                />
                {state.errors?.password?.map((error, index) => (
                    <p className="error" key={index}>
                        {error}
                    </p>
                ))}
            </div> {/* .login__write : end */}

            <p className="error mb-[20px]">{state.message}</p> 

            <SuccessButton 
                text="로그인"
                isLoading={isPending ? "is-loading" : ""}
            />
        </form>
    );
};

export default LoginForm;