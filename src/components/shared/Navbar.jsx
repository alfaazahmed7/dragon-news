'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavUserIcon from "@/assets/user.png"
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    return (
        <div className='w-10/12 mx-auto mb-14'>
            <div className='grid grid-cols-3 items-center'>
                <div></div>

                <div>
                    <ul className='flex justify-center gap-2 text-[#706F6F]'>
                        <li>
                            <Navlink href={"/"}>Home</Navlink>
                        </li>
                        <li>
                            <Navlink href={"/about-us"}>About</Navlink>
                        </li>
                        <li>
                            <Navlink href={"/career"}>Career</Navlink>
                        </li>
                    </ul>
                </div>

                <div className='flex justify-end'>
                    {isPending ?
                        <span className="loading loading-spinner loading-xl"></span>
                        :
                        user ?
                            <div className='flex gap-2 items-center'>
                                <p className='font-medium'>Hello, {user?.name}</p>
                                <Image
                                    src={user?.image || NavUserIcon}
                                    width={40}
                                    height={40}
                                    alt='NavUserIcon'
                                />
                                <button
                                    className='bg-[#403F3F] px-3 py-2 text-white'
                                    onClick={async () => await authClient.signOut()}
                                >Log Out</button>
                            </div>
                            :
                            <button
                                className='bg-[#403F3F] px-3 py-2 text-white'
                            >
                                <Link href={"/login"}>Login</Link>
                            </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;