import { collection ,getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { db } from '../Database/firebase.config';

export default function Home() {
    const [users , setUsers] = useState([])
    console.log("🚀 ~ Home ~ users:", users)
    

    useEffect(() => {
        getusers()
    },[])

    const getusers = async () => {
      const list = []
      const dbsnap = await getDocs(collection(db , "users"))
      dbsnap.forEach((item) => {
        list.push(item.data())
    })
    setUsers(list)
        console.log("🚀 ~ dbsnap.forEach ~ list:", list)
    }


    return (
        <div className='min-h-screen bg-stone-800'>
           <div className='bg-stone-900 w-full p-6'>
              <h1 className='text-2xl font-bold text-orange-500'>Users List</h1>
           </div>

           {/* display users list */}
           {
            users.map((item) => (
                <div key={item.id} className='w-full shadow-stone-800 shadow-md rounded-lg mx-auto my-4 py-7 px-10 bg-stone-900    00  text-orange-400'>
                    <h1 className='text-xl font-bold'>{item.name}</h1>
                    <p className='text-md text-orange-800'>{item.email}</p>
                </div>
            ))
           }
        </div>
    )
}