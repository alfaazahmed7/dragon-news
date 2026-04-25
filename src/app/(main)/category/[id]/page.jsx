import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import NewsCard from '@/components/homepage/NewsCard';
import NoNewsFound from '@/components/shared/NoNewsFound';
import { getCategories, getNewsByCategories } from '@/lib/data';
import React from 'react';

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;

    const categories = await getCategories();
    const news = await getNewsByCategories(id);

    return (
        <div className="w-10/12 mx-auto">
            <div className="grid grid-cols-12 gap-5">

                <div className="col-span-3">
                    <LeftSidebar categories={categories} activeId={id} />
                </div>

                <div className="col-span-6">
                    <h4 className="font-medium text-xl mb-4">All News</h4>
                    {news.length > 0 ? news.map((n, index) => {
                        return (
                            <NewsCard key={index} news={n} />
                        )
                    }) : <NoNewsFound />}
                </div>

                <div className="col-span-3">
                    <RightSidebar />
                </div>

            </div>
        </div>
    );
};

export default NewsCategoryPage;