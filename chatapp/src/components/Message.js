import React from 'react'

export default function Message(props) {
    return (
        <div className='w-full card bg-dark text-white p-2 mb-3'>
            <h5>{props.message}</h5>
        </div>
    )
}
