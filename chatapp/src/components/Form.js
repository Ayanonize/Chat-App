import React from 'react'
import Message from './Message'
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function Form() {

    const [message, setmessage] = useState('');
    const [data, setdata] = useState([]);

    const handelsubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:4001/chatapp/message.php', {
            params: {
                message: message
            }
        })

    }


    const GetData = () => {
        axios.get('http://localhost:4001/chatapp/getmessage.php')
            .then((res) => {
                let raw_data = res.data;
                setdata(raw_data);
            })
    }

    useEffect(() => {

        GetData();


    })


    return (
        <>
            <div className='container m-5'>
                <form onSubmit={handelsubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Message</label>
                        <textarea value={message} onChange={(e) => { setmessage(e.target.value) }} class="form-control" rows="0" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <hr />
                <h1 className="text-center mb-5">Messages</h1>


                {data.map((e) => {

                    return (<Message message={e.message}></Message>)
                })}



            </div>
        </>
    )
}
