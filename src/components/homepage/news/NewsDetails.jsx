'use client';
import { useState } from 'react';

const NewsDetails = ({ text }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <p className={`${expanded ? '' : 'line-clamp-3'} text-[#706F6F]`}>
                {text}
            </p>

            <button
                onClick={() => setExpanded(!expanded)}
                className="text-orange-500 font-medium cursor-pointer"
            >
                {expanded ? 'Show Less' : 'Read More'}
            </button>
        </div>
    );
};

export default NewsDetails;