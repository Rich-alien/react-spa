import React, {useState} from "react";
import style from "./header.module.css"
import {NavLink} from "react-router-dom"
import ShoppingCart from "../shopping-cart/shopping-cart";
import {useSelector} from "react-redux";
import {ReactComponent as LogoIconSvg} from '../../svg/logo.svg'
import {ReactComponent as CartIconSvg} from '../../svg/cart.svg'
import {selectCartCount} from "../../store/cart/cart.slice";


const Header = () => {
    const count = useSelector(selectCartCount)
    const [active, setActive] = useState(false);
    const handleClickCart = () => {
        setActive(true);
    }
    const handleCloseCart = () => {
        setActive(false);
    }
    return (
        <header className={style.header}>
            <div className={style.header__left}>
                <NavLink to='/' className={style.header__logo}>
                    <LogoIconSvg/>
                </NavLink>
                <nav className={style['header-nav']}>
                    <NavLink to='/' className={style['header-nav__href']}>Home</NavLink>
                    <NavLink to='/store' className={style['header-nav__href']}>Store</NavLink>
                    <NavLink to='/news' className={style['header-nav__href']}>News</NavLink>
                    <NavLink to='/log-in' className={style['header-nav__href']}>Log-in</NavLink>
                </nav>
            </div>
            <div className={style.header__right}>
                <div className={style.header__cart}>
                    <CartIconSvg
                        onClick={() => {
                            handleClickCart()
                        }}
                    />
                    <div className={style['header__cart-count']}><p>{count}</p></div>

                </div>
                <div className={style['container-template__cart']}>
                    <ShoppingCart active={active} closeCart = {handleCloseCart}/>
                </div>
                <button className={style.header__button}>
                    sign in
                </button>
            </div>
        </header>
    )


}

export default Header;
