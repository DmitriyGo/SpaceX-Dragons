import React, {FC, useState} from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {login} from "../../store/reducers/AuthActionCreators";
import classes from '../../components/UI/Button/Button.module.css'
import {LiteralUnion, RegisterOptions, useForm} from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
import cl from '../forms.module.css'
import {NavLink} from "react-router-dom";
import img from '../../static/loginbg.jpg'
import {TailSpin} from "react-loader-spinner";

type FormValues = {
    email: string; password: string;
};

const LoginPage: FC = () => {
    const dispatch = useAppDispatch();

    const [error, setError] = useState<string>('')
    const [showPassword, setShowPassword] = useState(false)
    const schema = yup.object().shape({
        email: yup.string().email().required(), password: yup.string().min(6).max(32).required(),
    });

    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: yupResolver(schema),
    });
    const errorHandler = (str: LiteralUnion<keyof RegisterOptions, string> | undefined): string | undefined => {
        switch (str) {
            case 'required':
                return 'This field is required';
            case 'email':
                return 'Incorrect email';
            case 'min':
                return 'Password minimum length is 6';
        }
    }

    const onSubmit = (data: FormValues) => {
        dispatch(login({email: data.email, password: data.password}))
            .then(({type, payload}) => {
                switch (type) {
                    case 'auth/login/rejected':
                        setError(String(payload))
                        break;
                    case 'auth/login/fulfilled':
                        setError('')
                        break;
                }
            })
    }

    function passBtnHandler(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setShowPassword(p => !p)
    }

    return (img ? <div className={cl.loginPage}>
        <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={cl.logo}>LOG IN</div>
            <div className={cl.formItemWrapper}>
                <div className={cl.formItem}>
                    <input className={cl.input} type="text" placeholder="Email" {...register("email")}/>
                    <p className={cl.error}>{errorHandler(errors.email?.type)}</p>
                </div>
                <div className={cl.formItem}>
                    <input className={cl.input} type={showPassword ? 'text' : 'password'}
                           placeholder="Password" {...register("password")}
                    />
                    <button className={cl.passBtn} onClick={passBtnHandler}>Show password</button>
                    <p className={cl.error}>{errorHandler(errors.password?.type)}</p>
                </div>
            </div>
            <p className={cl.error}>{error.length > 0 && error}</p>
            <input className={[classes.wide, classes.btnWhite].join(' ')} type="submit"/>
            <div className={cl.additionalActions}>
                <a className={cl.link} href="">Forgot password?</a>
                or
                <NavLink className={cl.link} to='/signup'>Create an account</NavLink>
            </div>
        </form>
    </div> : <div style={{display: 'flex', justifyContent: 'center'}}>
        <TailSpin
            height="120"
            width="120"
            color="#fff"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>)

};
export default LoginPage;



