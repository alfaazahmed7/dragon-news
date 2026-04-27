import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import NewsDetails from "./NewsDetails";

const NewsCard = ({ news }) => {
    return (
        <div className="shadow-sm mb-6 rounded-sm">

            <div className="flex justify-between items-center bg-[#F3F3F3] p-4">
                <div className="flex gap-1 items-center">
                    <Image
                        src={news.author?.img}
                        alt={news.author?.name}
                        height={40}
                        width={40}
                        className="rounded-full"
                    />
                    <div>
                        <h2 className="font-semibold">{news.author?.name}</h2>
                        <p className="text-xs text-[#706F6F]">{news.author?.published_date}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-1">
                    <CiShare2 className="text-xl" />
                    <CiBookmark className="text-xl" />
                </div>
            </div>

            <div className="px-4">
                <h2 className="my-4 font-bold text-xl text-[#403F3F]">{news.title}</h2>

                <figure>
                    <Image
                        src={news.image_url}
                        alt={news.title}
                        width={300}
                        height={300}
                        className="w-full mb-6"
                    />
                </figure>

                <NewsDetails text={news.details} />

                <hr className="my-3 border-t border-gray-300 opacity-50" />

                <div className="flex items-center justify-between gap-2 pb-3">
                    <div className="flex gap-2 items-center">
                        <ul className="flex gap-1">
                            <li><FaStar className="text-lg text-[#FF8C47]" /></li>
                            <li><FaStar className="text-lg text-[#FF8C47]" /></li>
                            <li><FaStar className="text-lg text-[#FF8C47]" /></li>
                            <li><FaStar className="text-lg text-[#FF8C47]" /></li>
                            <li><FaStar className="text-lg text-[#FF8C47]" /></li>
                        </ul>
                        <p className="text-[#706F6F] font-medium">{news.rating.number}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <p className="text-base text-[#706F6F] font-medium"><FaEye /></p>
                        <p className="text-base text-[#706F6F] font-medium">{news.total_view}</p>
                    </div>
                </div>

                <div className="flex justify-end pb-3">
                    <Link href={`/news/${news._id}`}>
                        <button className="relative inline-flex items-center justify-center px-5 py-2.5 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer">
                            See Details →
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;