import React from 'react';
import Moment from "react-moment";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { CheckCircleIcon, InformationCircleIcon, TrashIcon, UserIcon } from "@heroicons/react/solid";

import { deleteLog } from "../../actions/logsActions";

const LogItem = ({ log, deleteLog }) => {

    const onDelete = () => {
        deleteLog(log.id);
    }

    return (
        <li key={log.id}>
            <div className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                        <div className="flex-shrink-0">
                            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-500">
                                <span className="text-xs font-medium leading-none text-white">{log.workstation_id}</span>
                            </span>
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                            <div>
                                <p className="text-sm font-medium text-indigo-600 truncate">{log.message}</p>
                                <p className="mt-2 flex items-center text-sm text-gray-500">
                                    <UserIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                                    <span className="truncate">{log.tech}</span>
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <div>
                                    <p className="text-sm text-gray-900">
                                        Updated on <Moment format={'MMMM Do YYYY, h:mm:ss a'} className={'font-bold'}>{log.date}</Moment>
                                    </p>
                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                        {log.attention
                                            ? (<InformationCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400" aria-hidden="true"/>)
                                            : (<CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true"/>)
                                        }
                                        {log.attention ? 'Attention Required' : 'Status: Normal'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="inline-flex items-center px-3 py-3 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            onClick={onDelete}
                        >
                            <TrashIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true"/>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
};

export default connect(
    null,
    { deleteLog }
)(LogItem);
