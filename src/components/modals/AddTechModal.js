import React, { Fragment, useState } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Dialog, Transition } from "@headlessui/react";

import { setTechAddModal, addTech } from "../../actions/techsActions";

const AddTechModal = ({ setTechAddModal, addTech, tech: { showAddModal } }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [avatarURL, setAvatarURL] = useState('');
    const [role, setRole] = useState('');

    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setAvatarURL('');
        setRole('');
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (firstName === '' || lastName === '' || avatarURL === '' || role === '') {
            console.log('Empty Fields Submitted');
        } else {

            const data = {
                firstName,
                lastName,
                role,
                avatar: avatarURL
            }

            addTech(data);

            // Clear Fields
            clearFields();
            closeTechModal();
        }
    };

    const closeTechModal = () => {
        setTechAddModal(false);
    };

    return (
        <Transition.Root show={showAddModal} as={Fragment} onClose={() => closeTechModal()}>
            <Dialog
                as="div"
                static
                className="fixed z-10 inset-0 overflow-y-auto"
                open={showAddModal}
                onClose={closeTechModal}
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
                                <div className="mt-1 text-center">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                        Enter Technicians Details
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Please fill in the required fields to add a new log.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*  Form Elements  */}
                            <div className="sm:grid sm:gap-3 sm:grid-flow-row-dense">

                                <div className="md:col-span-2">
                                    <form onSubmit={onSubmit}>
                                        <div className="overflow-hidden sm:rounded-md">
                                            <div className="p-2">
                                                <div className="grid grid-cols-6 gap-6">

                                                    {/* First Name Field */}
                                                    <div className="col-span-6 md:col-span-3">
                                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                                            First Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            id="firstName"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            value={firstName}
                                                            onChange={e => setFirstName(e.target.value)}
                                                        />
                                                    </div>

                                                    {/* Last Name Field */}
                                                    <div className="col-span-6 md:col-span-3">
                                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                                            Last Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            id="lastName"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            value={lastName}
                                                            onChange={e => setLastName(e.target.value)}
                                                        />
                                                    </div>

                                                    {/* First Name Field */}
                                                    <div className="col-span-6">
                                                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                                            Role
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="role"
                                                            id="role"
                                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                            value={role}
                                                            onChange={e => setRole(e.target.value)}
                                                        />
                                                    </div>

                                                    {/* Avatar URL Field */}
                                                    <div className="col-span-6">
                                                        <label htmlFor="avatarURL" className="block text-sm font-medium text-gray-700">
                                                            Avatar URL
                                                        </label>
                                                        <div className="mt-1 flex rounded-md shadow-sm">
                                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                          https://
                                                        </span>
                                                            <input
                                                                type="text"
                                                                name="avatarURL"
                                                                id="avatarURL"
                                                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                                value={avatarURL}
                                                                onChange={e => setAvatarURL(e.target.value)}
                                                            />
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
                                                            className="mt-3 sm:mt-0 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:text-sm"
                                                            onClick={closeTechModal}
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

AddTechModal.propTypes = {
    tech: PropTypes.object.isRequired,
    setTechAddModal: PropTypes.func.isRequired,
    addTech: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    tech: state.tech,
});

export default connect(
    mapStateToProps,
    { setTechAddModal, addTech }
)(AddTechModal);
