import React from "react";
import style from './log-in.module.css'
import {useForm} from 'react-hook-form';
import {EMAIL_REGEX} from "../../validations/email.validation";

const LogInComponent = () => {
    const {register, handleSubmit, errors} = useForm()


    const onSubmit = data => console.log('Submit: ', data);
    return (
        <div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className={style.label} htmlFor="name">ФИО</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="input"
                        ref={register({required: true})}/>
                    {errors.name && <div className={style.label}>Заполите имя</div>}
                </div>
                <div>
                    <label className={style.label} htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        className="input"
                        ref={register({required: true, pattern: EMAIL_REGEX})}/>
                    {errors.name && <div className={style.label}>Заполите почту</div>}
                </div>
                <div>
                    <label
                        className={style.label}
                        htmlFor="type">Пол</label>
                    <select
                        name="type"
                        id="type"
                        ref={register({required: true})}
                    >
                        {errors.name && <div className={style.label}>Выберите пол</div>}
                        <option value="man">Муж</option>
                        <option value="woman">Жен</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default LogInComponent
