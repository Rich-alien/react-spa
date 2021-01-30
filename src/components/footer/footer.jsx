import * as React from "react";
import style from "./footer.module.css"
class Footer extends React.Component{
    render() {
        return(
            <footer className={style.footer}>
                <div className={style.top}>
                    <img className={style.top__img} src="#" alt="footer-img"/>
                </div>
                <div className={style.bottom}>
                </div>
            </footer>
        )
    }
}
export default Footer;
