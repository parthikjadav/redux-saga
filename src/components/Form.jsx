import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { POST_USER_PENDING } from '../redux-saga/user/action/action'

const Form = () => {

    let name = useRef()
    const dispatch = useDispatch()

    const hendeleSubmit = (e) => {
        e.preventDefault()
        console.log(name.current.value,"name    ")
        dispatch({type:POST_USER_PENDING,payload:name.current.value})
    }

    return (
        <div>
            <input type="text" name='name' ref={name} />
            <button onClick={hendeleSubmit}>submit</button>
        </div>
    )
}

export default Form
