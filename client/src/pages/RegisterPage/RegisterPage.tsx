import React, {FC, useState} from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {register} from "../../store/reducers/AuthActionCreators";
import classes from '../../components/UI/Button/Button.module.css'
import {LiteralUnion, RegisterOptions, useForm} from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
import cl from '../forms.module.css'
import {NavLink} from "react-router-dom";

type FormValues = {
    email: string; password: string;
};

const RegisterPage: FC = () => {

    const dispatch = useAppDispatch();
    const [showPassword, setShowPassword] = useState(false)
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).max(32).required(),
    });

    const {register: registerForm, handleSubmit, formState: {errors}} = useForm<FormValues>({
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
        dispatch(register({email: data.email, password: data.password}))
            .then(({type, payload}) => {
                switch (type) {
                    case 'auth/register/rejected':
                        console.log(payload)
                        break;
                    case 'auth/register/fulfilled':
                        console.log(payload)
                        break;
                }
            })
    }

    function passBtnHandler(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setShowPassword(p => !p)
    }

    return (<div className={cl.loginPage}>
        <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={cl.logo}>REGISTER</div>
            <div className={cl.formItemWrapper}>
                <div className={cl.formItem}>
                    <input className={cl.input} type="text" placeholder="Email" {...registerForm("email")} />
                    <p className={cl.error}>{errorHandler(errors.email?.type)}</p>
                </div>
                <div className={cl.formItem}>
                    <input className={cl.input} type={showPassword ? 'text' : 'password' } placeholder="Password" {...registerForm("password")}
                           />
                    <button className={cl.passBtn} onClick={passBtnHandler}>Show password</button>
                    <p className={cl.error}>{errorHandler(errors.password?.type)}</p>
                </div>
            </div>
            <input className={[classes.wide, classes.btnWhite].join(' ')} type="submit"/>
            <div className={cl.additionalActions}>
                <NavLink className={cl.link} to='/signin'>Already have an account?</NavLink>
            </div>
        </form>
    </div>)

};
export default RegisterPage;



