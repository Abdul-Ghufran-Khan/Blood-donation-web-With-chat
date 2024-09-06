import { collection ,getDocs } from 'firebase/firestore';
import { useEffect } from "react";
import { db } from '../Database/firebase.config';

export default function Home() {

    useEffect(() => {
        getusers()
    },[])

    const getusers = async () => {
      const list = []
      const dbsnap = await getDocs(collection(db , "users"))
      dbsnap.forEach((item) => {
        list.push(item.data())
      })
        console.log("🚀 ~ dbsnap.forEach ~ list:", list)
    }

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}