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
        <div>
           <div className='bg-orange-500'></div>
        </div>
    )
}