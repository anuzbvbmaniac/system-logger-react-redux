import React, { useRef } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { SearchIcon } from "@heroicons/react/solid";

import { searchLogs } from "../actions/logsActions";

const Search = ({ searchLogs }) => {

    const text = useRef('');

    const onChange = (event) => {
        searchLogs(text.current.value);
    };

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
                        placeholder="Search workstations"
                        type="search"
                        name="search"
                        ref={text}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>

    );
};

Search.propTypes = {
    searchLogs: PropTypes.func.isRequired,
};

export default connect(
    null,
    { searchLogs }
)(Search);
