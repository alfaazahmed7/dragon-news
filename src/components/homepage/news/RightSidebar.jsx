import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <h4 className="font-medium text-xl mb-4">Social Icons</h4>
            <div>
                <button className='flex items-center justify-center gap-2 border-2 border-blue-300 text-blue-400 w-full py-2 rounded-sm mb-3 font-medium'>
                    <FaGoogle />
                    Login with Google
                </button>
                
                <button className='flex items-center justify-center gap-2 border-2 w-full py-2 rounded-sm font-medium'>
                    <FaGithub />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default RightSidebar;