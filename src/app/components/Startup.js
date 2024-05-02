"use client"
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';

const Startup = () => {
  const {data:session} = useSession();
    const handleSignIn = async () => {
     await signIn()
    }
    const handleSignOut = async () => {
     await signOut();
    }
  return (
    <>
    <button onClick={handleSignIn}>Startup</button>
    {session?<h1>Authenticated
      <button onClick={handleSignOut}>signOut</button>
    </h1>:null}
    </>
  )
}

export default Startup