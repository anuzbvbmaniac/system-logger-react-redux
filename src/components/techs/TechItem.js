import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";

import { deleteTech, setCurrentTech, setTechEditModal } from "../../actions/techsActions";

const TechItem = ({ tech, setTechEditModal, setCurrentTech, deleteTech }) => {

    const onClickHandler = () => {
        setCurrentTech(tech);
        setTechEditModal(true);
    };

    return (
        <li
            key={tech.id}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
            <div className="flex-1 flex flex-col p-8">
                <img className="w-32 h-32 flex-shrink-0 mx-auto bg-white rounded-full" src={tech.avatar} alt={tech.firstName + ' ' + tech.lastName + ' Name'}/>
                <h3 className="mt-6 text-gray-900 text-sm font-medium">{tech.firstName + ' ' + tech.lastName}</h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm">{tech.role}</dd>
                </dl>
            </div>
            <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                        <button
                            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                            onClick={onClickHandler}
                        >
                            <PencilAltIcon className="w-5 h-5 text-gray-400" aria-hidden="true"/>
                            <span className="ml-3">Edit</span>
                        </button>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex">
                        <button
                            className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                            onClick={() => deleteTech(tech.id)}
                        >
                            <TrashIcon className="w-5 h-5 text-gray-400" aria-hidden="true"/>
                            <span className="ml-3">Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    setTechEditModal: PropTypes.func.isRequired,
    setCurrentTech: PropTypes.func.isRequired,
    deleteTech: PropTypes.func.isRequired,
};

export default connect(
    null,
    { setTechEditModal, setCurrentTech, deleteTech }
)(TechItem);
