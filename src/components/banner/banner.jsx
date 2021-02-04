import * as React from "react";
import style from "./banner.module.css"

class Banner extends React.Component {
    render() {
        return (
            <div>
                <div className={style.banner}>
                    <h1 className={style.banner__text}>Japan</h1>
                </div>
                <div className={style.drop}>
                    <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.14343L10 8L20 1.14343L18.3335 0L10 5.71475L1.66647 0L0 1.14343Z" fill="white"/>
                        <path d="M0 20.0005L10 26L20 20.0005L18.3335 19L10 24.0004L1.66647 19L0 20.0005Z" fill="white"/>
                        <path d="M0 11.0005L10 17L20 11.0005L18.3335 10L10 15.0004L1.66647 10L0 11.0005Z" fill="white"/>
                    </svg>
                </div>
                <div className={style.transition__block}>
                </div>
            </div>

        )
    }
}

export default Banner
