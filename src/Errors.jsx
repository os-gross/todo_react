import { useState } from "react"

const Error = ({message}) =>{
    const [cease, setCease] = useState(false);
    const handleClick = () =>{
        setCease(true);
    }
    return <div className={"error " + (cease ? "cease" : '')}>
        {message}
        <button onClick={handleClick} className="error__button">Okay</button>
    </div>
}

export default function Errors({errors}){
    return <div className="errors">
        {errors.map((error, index) => {
            return <Error message={error.message}  key={index} />
        })}
    </div>
}