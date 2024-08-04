'use client';

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SecondaryButton } from "./Button";

export const HeroComponent = () =>{
    const session = useSession();
    const router = useRouter();

    return <div className="text-6xl font-medium">
        <div className="flex justify-center" >
        <span>
            Global Crypto
        </span>
        <span className="text-blue-500 pl-4">
            Revolution
        </span>
        </div>
       
        <div className="flex justify-center pt-4 text-2xl text-slate-500">
            create Crypto wallet just by Google account

        </div>
        <div className="flex justify-center pt-2 text-2xl text-slate-500">
            Convert your indian currency into crypto currency
        </div>
        <div className="pt-8 flex justify-center">
            {session.data?.user? <SecondaryButton onClick={() => {
                router.push("/dashboard");

            }}>Go to Dashboard</SecondaryButton>: <SecondaryButton onClick={() =>
            {
                signIn("google");

            }
            }>Login with Google</SecondaryButton>}
            

            
        </div>

    </div>
}