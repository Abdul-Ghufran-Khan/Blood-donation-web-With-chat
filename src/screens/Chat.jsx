import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { db } from '../Database/firebase.config';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function Chat() {
    const [messages, setMessages] = useState([])
    const Navigate = useNavigate()
    const { state } = useLocation()
    console.log("🚀 ~ Chat ~ state:", state)


    useEffect(() => {
        getMessages()
    }, [])

    const getMessages = async () => {
    }


    return (
        <div className='min-h-screen bg-stone-800'>
            <div className='bg-stone-900 w-full p-6 mb-16 flex items-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mpEAFXv-iIa50q5rA2L6nnHGy_akXDFyQQ&s" className='w-12 h-12 rounded-full border-2 mr-4 border-black' />
                <h1 className='text-3xl font-bold text-orange-500'>{state.name}</h1>
            </div>
        </div>
    )
}