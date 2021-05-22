import React from 'react';
import { SearchIcon } from "@heroicons/react/solid";

const Search = () => {
    return (
        <div className="flex-1 flex justify-center w-100 pb-6">
            <div className="w-full">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <div className="relative text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon className="h-5 w-5" aria-hidden="true"/>
                    </div>
                    <input
                        id="search"
                        className="block w-full bg-white py-2 pl-10 pr-3 border-2 border-indigo-600 rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white focus:border-white sm:text-sm"
                        placeholder="Search"
                        type="search"
                        name="search"
                    />
                </div>
            </div>
        </div>

    );
};

export default Search;
