import { Navigate } from "react-router-dom";
import style from './NotAuthorized.module.css'

export default function NotAuthorized() {
    return <div>
        <p>You have no permission to change this record! </p>
        <p>If you want to create your own review go to <Navigate style={style.link} to='/create-review'>Create Review</Navigate></p>
        <p>Or just go <Navigate>Home</Navigate></p>
    </div>
}