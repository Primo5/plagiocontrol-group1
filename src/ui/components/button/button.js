import { React } from "react"; 
export const button = ({typeButton, label}) => {
    return (
        <input className="button" type={typeButton} value={label} />
    )
}