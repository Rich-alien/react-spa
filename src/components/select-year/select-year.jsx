import * as React from "react";
import style from "./select-year.module.css"
class SelectYear extends React.Component{
    render() {
        return(
            <div className={style.select}>
                <div className={style['select-notification']}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.4896 22.9167C6.73798 22.911 2.0795 18.2447 2.08333 12.4931C2.08717 6.74149 6.75186 2.08146 12.5035 2.08337C18.2551 2.08529 22.9167 6.74843 22.9167 12.5C22.9132 18.2556 18.2452 22.919 12.4896 22.9167ZM4.16667 12.6792C4.21596 17.2638 7.95949 20.9475 12.5443 20.923C17.1291 20.8982 20.8329 17.1745 20.8329 12.5896C20.8329 8.00473 17.1291 4.28105 12.5443 4.25628C7.95949 4.23176 4.21596 7.91541 4.16667 12.5V12.6792ZM13.5417 17.7084H11.4583V15.625H13.5417V17.7084ZM13.5417 13.5417H11.4583V7.2917H13.5417V13.5417Z"
                            fill="white"/>
                    </svg>
                    <p className={style['select-notification__text']}>select katana year</p>
                </div>
                <div className={style['select-year']}>
                    {/* потом вернуть в тег <a/>*/}
                    <div  className={style['select-year__href']}>1970</div>
                    <div  className={style['select-year__href']}>1970</div>
                    <div  className={style['select-year__href']}>1970</div>
                    <div  className={style['select-year__href']}>1970</div>
                    <div  className={style['select-year__href']}>1970</div>
                    <div  className={style['select-year__href']}>1970</div>
                    <div  className={style['select-year__href']}>1970</div>
                    <div  className={style['select-year__href']}>1970</div>
                    <div  className={style['select-year__href']}>1970</div>
                    <div  className={style['select-year__href']}>1970</div>

                </div>
            </div>
        )
    }
}
export default SelectYear;
