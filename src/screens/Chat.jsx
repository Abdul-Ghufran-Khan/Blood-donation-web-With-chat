import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { db } from '../Database/firebase.config';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function Chat() {
    const [messages, setMessages] = useState([])
    const Navigate = useNavigate()
    const params = useLocation()
    console.log("🚀 ~ Chat ~ params:", params)

    useEffect(() => {
        getMessages()
    }, [])

    const getMessages = async () => {
    }


    return (
        <div className='min-h-screen bg-stone-800'>
            <div className='bg-stone-900 w-full p-6 mb-16'>
                <h1 className='text-2xl font-bold text-orange-500'>Users List</h1>
            </div>
        </div>
    )
}