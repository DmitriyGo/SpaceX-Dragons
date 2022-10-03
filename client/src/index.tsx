import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Main from './pages/MainPage/Main';

import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./components/Layout/Layout";
import UserPage from "./pages/UserPage/UserPage";
import AppRoute from "./components/AppRoute.component";

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(<React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <AppRoute/>
        </Provider>
    </BrowserRouter>
</React.StrictMode>);
