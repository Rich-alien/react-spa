import React from "react";
import { useForm } from 'react-hook-form';
const LogIn = () => {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => console.log('Submit: ', data)
    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
                <label>First name</label>
                <input type="text" name="first-name" placeholder="First Name"/>
            </div>
            <div className="field">
                <label>Last name</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
            </div>
            <button  type="submit">Submit</button>
        </form>
    )
}
export default LogIn
