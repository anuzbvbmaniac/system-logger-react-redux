import React from 'react';
import { TrashIcon } from "@heroicons/react/solid";

const IconButton = (props) => {
    return (
        <button
            type="button"
            className={`inline-flex items-center px-3 py-3 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-${props.color} bg-${props.background} hover:bg-${props.background}-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${props.background}-500`}
        >
            <TrashIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true"/>
            Delete
        </button>
    );
};

export default IconButton;
