import React from 'react';
import { DocumentAddIcon, UserAddIcon } from "@heroicons/react/solid";

const Header = (props) => {
    return (
        <header className="py-10 justify-between flex max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">

            <div className="max-w-7xl">
                <h1 className="text-3xl font-bold text-white">{props.title}</h1>
            </div>

            <div>
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border-2 border-white rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2"
                >
                    <DocumentAddIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true"/>
                    Add Log
                </button>

                <button
                    type="button"
                    className="ml-2 inline-flex items-center px-4 py-2 border-2 border-white rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2"
                >
                    <UserAddIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true"/>
                    Add Techs
                </button>
            </div>

        </header>
    );
};

export default Header;
