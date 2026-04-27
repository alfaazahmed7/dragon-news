import { getNewsByCategories } from '@/lib/data';
import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = async () => {
    const breakingNewsData = await getNewsByCategories("01");

    return (
        <div className='w-10/12 mx-auto flex gap-2 bg-[#F3F3F3] px-4 py-2 my-6'>
            <button className='bg-[#D72050] px-3 py-2 text-white font-medium'>Latest</button>
            <Marquee pauseOnHover={true}>
                {breakingNewsData.map((news) => (
                    <p key={news._id} className='mr-10 font-medium'>
                        Breaking News: {news.title}
                    </p>
                ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;