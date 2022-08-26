import React from 'react'
import { signIn } from 'next-auth/react'


function Login({ providers }) {

  return (
    <>
      <div className='bg-black h-screen'>
        {Object.values(providers).map(provider => (
          <div key={provider.name} className="text-[30px] text-black">

            <button onClick={() => signIn(provider.Id,{callbackUrl:"/"})} className='bg-white  mt-[50px] ml-[100px] h-[50px] w-[100px] rounded-md p-2'>Log In </button></div>
        ))}
        <div className="text-[30px] text-black"><button className='bg-white  mt-[50px] ml-[100px] h-[50px] w-[100px] rounded-md p-2'>Log In </button></div>

      </div>
    </>
  )
}

export default Login