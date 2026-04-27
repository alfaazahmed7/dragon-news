import Link from 'next/link';
import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import LeftSidebarImage1 from "@/assets/club-world-cup.webp";
import LeftSidebarImage2 from "@/assets/international-news.webp";
import LeftSidebarImage3 from "@/assets/bd-news.webp";
import Image from 'next/image';

const LeftSidebar = ({ categories, activeId }) => {
    return (
        <>
            <div className='mb-5'>
                <h4 className="font-medium text-xl mb-4">All Categories</h4>
                <div>
                    <ul className="font-medium">
                        {categories.news_category.map((category) => {
                            return (
                                <li key={category.category_id}
                                    className={`${activeId === category.category_id && "bg-[#E7E7E7] text-black"} text-[#9F9F9F] px-5 py-3 text-center rounded-sm`}
                                >
                                    <Link href={`/category/${category.category_id}`}
                                        className='block'
                                    >{category.category_name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white mb-5">
                <div className="bg-gray-100 flex items-center justify-center">
                    <Image
                        src={LeftSidebarImage1} height={200} alt='Bayern Slams Authorities Over Flight Delay to Club World Cup'
                        className='p-2 rounded-2xl'
                    />
                </div>

                <div className="p-4">
                    <p className="text-base font-semibold text-gray-900 leading-snug mb-3">
                        Bayern Slams Authorities Over Flight Delay to Club World Cup
                    </p>

                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="font-medium text-gray-700">Sports</span>
                        <div className="flex items-center gap-1">
                            <BiCalendar size={13} />
                            <span>Jan 4, 2022</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white mb-5">
                <div className="bg-gray-100 flex items-center justify-center">
                    <Image
                        src={LeftSidebarImage2} height={200} alt='Tensions Rise as Major Powers Clash Over Trade and Security'
                        className='p-2 rounded-2xl'
                    />
                </div>

                <div className="p-4">
                    <p className="text-base font-semibold text-gray-900 leading-snug mb-3">
                        Tensions Rise as Major Powers Clash Over Trade and Security
                    </p>

                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="font-medium text-gray-700">International News</span>
                        <div className="flex items-center gap-1">
                            <BiCalendar size={13} />
                            <span>Jan 4, 2022</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                <div className="bg-gray-100 flex items-center justify-center">
                    <Image
                        src={LeftSidebarImage3} height={200} alt='High-level USTR representative to arrive in Dhaka soon'
                        className='p-2 rounded-2xl'
                    />
                </div>

                <div className="p-4">
                    <p className="text-base font-semibold text-gray-900 leading-snug mb-3">
                        High-level USTR representative to arrive in Dhaka soon
                    </p>

                    <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="font-medium text-gray-700">Breaking News</span>
                        <div className="flex items-center gap-1">
                            <BiCalendar size={13} />
                            <span>Jan 4, 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftSidebar;