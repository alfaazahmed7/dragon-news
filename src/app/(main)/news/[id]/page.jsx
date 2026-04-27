import NewsDetails from "@/components/homepage/news/NewsDetails";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { CiBookmark, CiShare2 } from "react-icons/ci";

export const metadata = {
    title: "Dragon News Details",
    description: "Best news portal in Bangladesh, this site is trusted by millions",
};

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;

    const news = await getNewsDetailsById(id);
    const categories = await getCategories();

    return (
        <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-12 gap-5">

                <div className="shadow-sm mb-6 rounded-sm col-span-9">

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

                        <p className="text-[#706F6F]">{news.details}</p>

                        <hr className="my-3 border-t border-gray-300 opacity-50" />

                        <div className="flex justify-end pb-3">
                            <Link href={`/category/${news.category_id}`}>
                                <button className="relative inline-flex items-center justify-center px-5 py-2.5 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer">
                                    ← All news in this category 
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-span-3">
                    <RightSidebar />
                </div>

            </div>
        </div>
    );
};

export default NewsDetailsPage;