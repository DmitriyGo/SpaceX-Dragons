import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from "../UI/Container/Container.component";
import Navbar from "../Navbar/Navbar.component";
import cl from './Layout.module.css'

const Layout = () => {
    return (
        <div className={cl.wrapper}>
            <header className={cl.header}>
                <nav style={{borderBottom: '2px solid white'}}>
                    <Container>
                        <Navbar/>
                    </Container>
                </nav>
            </header>
            <main className={cl.main}>
                <Outlet/>
            </main>
            <footer className={cl.footer}>
                <Container>
                    <div className={cl.footerInner}>
                        <span>Dmitry Gorbatenko © 2022</span>
                        <a href="https://github.com/DmitriyGo" target="_blank" className={cl.footerInnerLink}>GitHub</a>
                        <a href="https://www.instagram.com/gorbatenko_dmitry" target="_blank" className={cl.footerInnerLink}>Instagram</a>
                        <a href="https://www.linkedin.com/in/dmitry-gorbatenko-688a77240" target="_blank" className={cl.footerInnerLink}>LinkedIn</a>
                    </div>
                </Container>
            </footer>
        </div>
    );
};

export default Layout;
