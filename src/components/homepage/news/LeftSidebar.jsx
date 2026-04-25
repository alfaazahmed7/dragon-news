import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
    return (
        <div>
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
    );
};

export default LeftSidebar;