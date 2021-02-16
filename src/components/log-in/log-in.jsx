import React from "react";
const LogIn = () => {
    // const [data,setData] = useState([]);
    return (
        <form className="form">
            <div className="field">
                <label>First name</label>
                <input type="text" name="first-name" placeholder="First Name"/>
            </div>
            <div className="field">
                <label>Last name</label>
                <input type="text" name="last-name" placeholder="Last Name"/>
            </div>
            <button className="button" type="submit">Submit</button>
        </form>
    )
}
export default LogIn
