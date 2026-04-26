import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavUserIcon from "@/assets/user.png"
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='w-10/12 mx-auto mb-14'>
            <div className='flex justify-between items-center'>
                <div></div>

                <div>
                    <ul className='flex gap-2 text-[#706F6F]'>
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

                <div className='flex gap-2'>
                    <Image src={NavUserIcon} width={40} height={40} alt='NavUserIcon' />
                    <Link href={"/login"} className='bg-[#403F3F] px-3 py-2 text-white'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;