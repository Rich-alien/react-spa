import * as React from "react";
import style from "./header.module.css"
import {NavLink} from "react-router-dom"


class Header extends React.Component {
    render() {
        return (
            <header className={style.header}>
                <div className={style.header__left}>
                    <NavLink to='/home' className={style.header__logo}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18.0001" cy="18" r="18" fill="white"/>
                            <line x1="4.14548" y1="6.36201" x2="17.9544" y2="15.3492" stroke="#FF0000"
                                  strokeWidth="2"/>
                            <line x1="1.46956" y1="10.9789" x2="16.4695" y2="20.5789" stroke="#FF0000"/>
                            <line x1="0.083396" y1="19.8512" x2="16.2749" y2="22.3058" stroke="#FF0000"/>
                            <line x1="18.531" y1="22.3049" x2="35.7462" y2="19.9049" stroke="#FF0000"/>
                            <line x1="16.8855" y1="15.3426" x2="31.8855" y2="6.34264" stroke="#FF0000"
                                  strokeWidth="2"/>
                            <line x1="18.3451" y1="20.5699" x2="34.5451" y2="10.9699" stroke="#FF0000"/>
                            <line x1="16.6" y1="36.0001" x2="16.6" y2="9.15527e-05" stroke="#FF0000" strokeWidth="4"/>
                        </svg>
                    </NavLink>
                    <nav className={style['header-nav']}>
                        <NavLink to='/home' className={style['header-nav__href']}>Home</NavLink>
                        <NavLink to='/store' className={style['header-nav__href']}>Store</NavLink>
                        <NavLink to='/news' className={style['header-nav__href']}>News</NavLink>
                    </nav>
                </div>
                <div className={style.header__right}>
                    <NavLink to='/cart' className={style.header__cart}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M10.4826 19.6694C9.27027 19.6694 8.28394 20.6557 8.28394 21.8681C8.28394 23.0804 9.27027 24.0667 10.4826 24.0667C11.695 24.0667 12.6813 23.0804 12.6813 21.8681C12.6813 20.6557 11.6949 19.6694 10.4826 19.6694ZM10.4826 22.839C9.94717 22.839 9.51157 22.4034 9.51157 21.868C9.51157 21.3325 9.94722 20.8969 10.4826 20.8969C11.018 20.8969 11.4537 21.3326 11.4537 21.868C11.4537 22.4035 11.018 22.839 10.4826 22.839Z"
                                    fill="white"/>
                                <path
                                    d="M18.7362 8.09351H9.93987C9.60085 8.09351 9.32605 8.36831 9.32605 8.70733C9.32605 9.04634 9.6009 9.32115 9.93987 9.32115H18.7362C19.0752 9.32115 19.35 9.04634 19.35 8.70733C19.35 8.36826 19.0752 8.09351 18.7362 8.09351Z"
                                    fill="white"/>
                                <path
                                    d="M18.2574 11.281H10.4186C10.0796 11.281 9.80481 11.5558 9.80481 11.8948C9.80481 12.2338 10.0796 12.5086 10.4186 12.5086H18.2574C18.5964 12.5086 18.8712 12.2338 18.8712 11.8948C18.8712 11.5559 18.5964 11.281 18.2574 11.281Z"
                                    fill="white"/>
                                <path
                                    d="M24.7236 5.35859C24.4895 5.07129 24.1427 4.90654 23.772 4.90654H4.65215L4.26602 3.03207C4.1854 2.64106 3.9187 2.31274 3.55244 2.1537L0.858251 0.984266C0.547215 0.849159 0.18574 0.991883 0.0508277 1.30282C-0.0842311 1.61386 0.0584937 1.97538 0.369383 2.11029L3.06363 3.27978L6.03365 17.6968C6.15064 18.2646 6.65631 18.6767 7.23604 18.6767H21.9414C22.2805 18.6767 22.5553 18.4019 22.5553 18.0629C22.5553 17.7239 22.2805 17.4491 21.9414 17.4491H7.23609L6.87481 15.6954H22.0551C22.6348 15.6954 23.1405 15.2833 23.2575 14.7155L24.9744 6.38174C25.0492 6.01885 24.9578 5.64585 24.7236 5.35859ZM22.0551 14.4678H6.62193L4.90508 6.13413L23.772 6.13418L22.0551 14.4678Z"
                                    fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="25" height="25" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </NavLink>
                    {/*добавить страничку под авторизацию!*/}
                    <button className={style.header__button}>
                        sign in
                    </button>
                </div>
            </header>
        )
    }
}

export default Header;
