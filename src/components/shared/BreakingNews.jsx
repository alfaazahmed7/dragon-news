import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        _id: "1",
        title: "Breaking News: Major Event Unfolds in the City",
    },
    {
        _id: "2",
        title: "Breaking News: New Policy Announced by the Government",
    },
    {
        _id: "3",
        title: "Breaking News: Sports Team Wins Championship",
    },
];

const BreakingNews = () => {
    return (
        <div className='w-10/12 mx-auto flex gap-2 bg-[#F3F3F3] px-4 py-2 mb-6'>
            <button className='bg-[#D72050] px-3 py-2 text-white font-medium'>Latest</button>
            <Marquee pauseOnHover={true}>
                {news.map((n) => (
                    <span key={n._id}>
                        {n.title}
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;