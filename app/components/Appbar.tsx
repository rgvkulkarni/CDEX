'use client';

import { PrimaryButton } from "./Button"
import {signIn, useSession, signOut } from "next-auth/react"

export const Appbar = () => {
    const session = useSession();
    return <div className="border-b px-2 py-2 flex justify-between" >
        <div className="text-xl font-bold flex flex-col justify-center">
            DCEX
        </div>
        <div>
            {session.data?.user? <PrimaryButton onClick={() => {
               signOut({callbackUrl:'/'})
            }}>Logout</PrimaryButton> : <PrimaryButton onClick={() => {
                signIn()
            }}>Signin</PrimaryButton>
        }
        </div>
    </div>
}