import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";

import { setModal, updateLog } from "../../actions/logsActions";
import TechSelectOptions from "../techs/TechSelectOptions";

const EditLogModal = ({ log, setModal, updateLog }) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');
    const [workstation, setWorkstation] = useState('');

    useEffect(() => {
        if (log.current) {
            setMessage(log.current.message);
            setAttention(log.current.attention);
            setTech(log.current.tech);
            setWorkstation(log.current.workstation_id);
        }
    }, [log]);

    const clearFields = () => {
        setMessage('');
        setAttention(false);
        setTech('');
        setWorkstation('');
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (message === '' || tech === '' || workstation === '') {
            console.log('Please enter the required values.');
        } else {
            const data = {
                id: log.current.id,
                message,
                attention,
                tech,
                workstation_id: workstation,
                date: new Date(),
            }

            updateLog(data);

            clearFields();
            setModal(false);
        }
    };

    const closeEditModalForm = () => {
        setModal(false);
    };

    return (
        <Transition.Root show={log.showEditModal} as={Fragment}>
            <Dialog
                as="div"
                static
                className="fixed z-10 inset-0 overflow-y-auto"
                open={log.showEditModal}
                onClose={closeEditModalForm}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div>
                                <div className="mt-3 text-center sm:mt-5">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                        Enter System Logs
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Please fill in the required fields to add a new log.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*  Form Elements  */}
                            <div className="sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">

                                <div className="md:col-span-2">
                                    <form onSubmit={onSubmit}>
                                        <div className="overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-5 sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">

                                                    {/* Message Field */}
                                                    <div className="col-span-6">
                                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                                            Message
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="message"
                                                            id="message"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            value={message}
                                                            onChange={e => setMessage(e.target.value)}
                                                        />
                                                    </div>

                                                    {/*  Tech Select Field  */}
                                                    <div className="col-span-6">
                                                        <label htmlFor="tech" className="block text-sm font-medium text-gray-700">
                                                            Tech Name
                                                        </label>
                                                        <select
                                                            id="tech"
                                                            name="tech"
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            value={tech}
                                                            onChange={event => setTech(event.target.value)}
                                                        >
                                                            <option value="" disabled>Select Technicians</option>
                                                            <TechSelectOptions />
                                                        </select>
                                                    </div>

                                                    {/*  Workstation Select Field  */}
                                                    <div className="col-span-6">
                                                        <label htmlFor="workstation" className="block text-sm font-medium text-gray-700">
                                                            Workstation Name
                                                        </label>
                                                        <select
                                                            id="workstation"
                                                            name="workstation"
                                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                            value={workstation}
                                                            onChange={event => setWorkstation(event.target.value)}
                                                        >
                                                            <option value="" disabled>Select Workstation</option>
                                                            <option value="WS001">WS001</option>
                                                            <option value="WS002">WS002</option>
                                                            <option value="WS003">WS003</option>
                                                            <option value="WS004">WS004</option>
                                                            <option value="WS005">WS005</option>
                                                        </select>
                                                    </div>

                                                    {/*  Attention Check Field  */}
                                                    <div className="col-span-6">
                                                        <div className="mt-1 space-y-4">
                                                            <div className="flex items-start">
                                                                <div className="flex items-center h-5">
                                                                    <input
                                                                        id="attention"
                                                                        name="attention"
                                                                        type="checkbox"
                                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                        checked={attention}
                                                                        value={attention}
                                                                        onChange={event => setAttention(!attention)}
                                                                    />
                                                                </div>
                                                                <div className="ml-3 text-sm">
                                                                    <label htmlFor="attention" className="font-medium text-gray-700">
                                                                        Attention
                                                                    </label>
                                                                    <p className="text-gray-500">Please check if the log needs any attention.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    {/* Save Button */}
                                                    <div className="col-span-3">
                                                        <button
                                                            type="submit"
                                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                                        >
                                                            Save
                                                        </button>
                                                    </div>

                                                    {/* Cancel Button */}
                                                    <div className="col-span-3">
                                                        <button
                                                            type="button"
                                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:text-sm"
                                                            onClick={closeEditModalForm}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

EditLogModal.propTypes = {
    log: PropTypes.object.isRequired,
    updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    log: state.log,
});

export default connect(
    mapStateToProps,
    { setModal, updateLog }
)(EditLogModal);
