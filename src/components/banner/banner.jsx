import * as React from "react";
import style from "./banner.module.css"
import {ReactComponent as DropIconSvg} from '../../svg/drop.svg'

const Banner = () => {
    return (
        <div>
            <div className={style.banner}>
                <h1 className={style.banner__text}>Japan</h1>
            </div>
            <div className={style.drop}>
                <DropIconSvg/>
            </div>
            <div className={style.transition__block}>
            </div>
        </div>

    )
}

export default Banner
