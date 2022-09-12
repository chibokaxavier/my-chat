import React from 'react'
import { signIn } from 'next-auth/react'
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
import { GoogleAuthProvider } from "firebase/auth";
import { getProviders, getSession, useSession, ClientSafeProvider } from 'next-auth/react'
function Login({ providers }: { providers: typeof getProviders }) {

  
let provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

  return (
    <>
    
    <div className="grid grid-cols-3">
    <div></div>
    <div className='mt-[200px] h-screen'>
      <span className="mt-[50px] text-[20px]"> Please Log In With Your Google Account Here</span>
        {Object.values(providers).map((provider: ClientSafeProvider) => (
          <div key={provider.name} className="text-[15px] text-white  ml-10" onClick={()=>console.log("clicked")} >

  <button onClick={() => { let res = signIn(provider.id, { callbackUrl: '/' }); console.log(res) }} className='hover:bg-gray-300 hover:text-black bg-gray-900  mt-[50px] ml-[100px] h-[40px] w-[100px] rounded-md p-2'>Log In </button></div>
         
         ))}
      </div>
      <div></div>
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