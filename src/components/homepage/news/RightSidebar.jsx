'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import swimmingImage from "@/assets/swimming.png";
import classImage from "@/assets/class.png";
import playGround from "@/assets/playground.png";

const RightSidebar = () => {
    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    const handleGithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    }

    return (
        <>
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

            <div className='mt-5'>
                <h4 className='text-[#403F3F] text-xl font-semibold mb-3'>Q-zone</h4>

                <div>
                    <Image
                        src={swimmingImage} height={200} alt='swimming related news'
                        className='mx-auto mb-4'
                    />
                </div>
                <div>
                    <Image
                        src={classImage} height={200} alt='swimming related news'
                        className='mx-auto mb-4'
                    />
                </div>
                <div>
                    <Image
                        src={playGround} height={200} alt='swimming related news'
                        className='mx-auto mb-4'
                    />
                </div>
            </div>
        </>
    );
};

export default RightSidebar;