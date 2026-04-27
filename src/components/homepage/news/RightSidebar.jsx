'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data, "data");
    }

    const handleGithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
        console.log(data, "data");
    }

    return (
        <div>
            <h4 className="font-medium text-xl mb-4">Social Icons</h4>
            <div>
                <button
                    className='flex items-center justify-center gap-2 border-2 border-blue-300 text-blue-400 w-full py-2 rounded-sm mb-3 font-medium cursor-pointer'
                    onClick={handleGoogleSignin}
                >
                    <FaGoogle />
                    Login with Google
                </button>

                <button
                    onClick={handleGithubSignin}
                    className='flex items-center justify-center gap-2 border-2 w-full py-2 rounded-sm font-medium cursor-pointer'
                >
                    <FaGithub />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default RightSidebar;