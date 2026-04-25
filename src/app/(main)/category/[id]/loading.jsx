import React from "react";

const NewsLoader = () => {
    return (
        <div className="flex justify-center items-center py-10">
            <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-black rounded-full"></div>
        </div>
    );
};

export default NewsLoader;