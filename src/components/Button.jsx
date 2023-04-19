import { useState } from 'react'
import './Button.css'

function Button(){
    const [message, setMessage] = useState()

    function disboing(){
        if(message){
            setMessage('')
        }else{
            setMessage('Boing')
        }
    }

    return(
        <p>
            <button onClick={disboing}>Fais boing</button>
            <span>{message}</span>
        </p>
     )
}

export default Button