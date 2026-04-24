import React from 'react';
import Logo from "@/assets/logo.png";
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='text-center py-14'>
            <Image src={Logo} width={400} height={200} alt='Logo' className='mx-auto mb-4' />
            <p className='text-[#706F6F] mb-3 text-lg'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;