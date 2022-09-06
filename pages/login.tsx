import React from 'react'
import { signIn } from 'next-auth/react'
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from '../firebase';

import { getProviders, getSession, useSession, ClientSafeProvider } from 'next-auth/react'


function Login({ providers }: { providers: typeof getProviders }) {
  // const setDoc = async()=>{

  //   await setDoc(doc(db, `users`, id), {
  //     heello,
  //   });

  // }

  return (
    <>
      <div className='bg-black h-screen'>
        {Object.values(providers).map((provider: ClientSafeProvider) => (
          <div key={provider.name} className="text-[30px] text-black" >

            <button onClick={() => { let res = signIn(provider.id, { callbackUrl: '/' }); console.log(res) }} className='bg-white  mt-[50px] ml-[100px] h-[50px] w-[100px] rounded-md p-2'>Log In </button></div>
        ))}
        <div className="text-[30px] text-black"><button className='bg-white  mt-[50px] ml-[100px] h-[50px] w-[100px] rounded-md p-2'>Log In </button></div>

      </div>
    </>
  )
}
export async function getServerSideProps(context) {
  const providers = await getProviders()
  const session = await getSession(context)
  return {
    props: {
      providers,
      session,
    },
  }
}
export default Login