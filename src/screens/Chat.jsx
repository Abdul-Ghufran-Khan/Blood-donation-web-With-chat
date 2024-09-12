import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { db } from '../Database/firebase.config';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function Chat() {
    const Navigate = useNavigate()
    const { state } = useLocation()
    const [messages, setMessages] = useState([])
    const [Chatlist, setChatlist] = useState([])


    useEffect(() => {
        getMessages()
    }, [])

    const getMessages = async () => {
    }

    const sendMsg = async () => {
        let Myuid = await localStorage.getItem('userid')
        addDoc(collection(db, 'messages')), {
            message : messages,
            [Myuid] : true,
            [state.uid] : true,
            createdAt: Date.now()
        }
    }


    return (
        <div className='min-h-screen bg-stone-800'>
            <div className='bg-stone-900 w-full p-4 flex items-center'>
                <img src="https://png.pngtree.com/png-vector/20231115/ourmid/pngtree-back-icon-navigation-png-image_10603473.png" className='w-12 h-12 rounded-full border-2 mr-4 border-stone-800 cursor-pointer' onClick={() => Navigate('/home')} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mpEAFXv-iIa50q5rA2L6nnHGy_akXDFyQQ&s" className='w-12 h-12 rounded-full border-2 mr-4 border-black' />
                <h1 className='text-3xl font-bold text-orange-500'>{state.name}</h1>
            </div>

            <div className='bg-stone-950 h-[80vh]'>

            </div>

            <div className='flex items-center justify-center pt-1 gap-2'>
                <input value={messages} onChange={(e) => setMessages(e.target.value)} placeholder='Message' className='text-white w-10/12 h-10 bg-stone-900 rounded-lg px-6 py-2 text-xl outline-none'/>
                <button onClick={sendMsg} className='text-orange-600 text-xl w-20 rounded-md h-10 bg-stone-950'>Send</button>
            </div>
        </div>
    )
}