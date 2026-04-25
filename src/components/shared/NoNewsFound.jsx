"use client";
import { FaRegNewspaper } from "react-icons/fa";

const NoNewsFound = () => {
    return (
        <div className="flex justify-center items-center h-full px-4">
            <div className="w-full text-center bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">

                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-full bg-gray-100">
                    <FaRegNewspaper className="text-3xl text-gray-400" />
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    No News Found
                </h2>

                <p className="text-gray-500 text-sm mb-6">
                    Looks like there’s nothing here right now. Try selecting a different category or check back later.
                </p>

                <button
                    onClick={() => window.location.reload()}
                    className="px-5 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition"
                >
                    Refresh
                </button>
            </div>
        </div>
    );
};

export default NoNewsFound;