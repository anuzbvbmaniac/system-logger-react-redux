import { ADD_TECH, CLEAR_CURRENT_TECH, DELETE_TECH, GET_TECHS, SET_CURRENT_TECH, SET_LOADING, SET_TECH_EDIT_MODAL, SET_TECH_MODAL, TECHS_ERROR, UPDATE_TECH } from "./types";

/**
 * Get all technicians Records
 * @returns {(function(*): Promise<void>)|*}
 */
export const getTechs = () => {
    return async (dispatch) => {
        try {
            setLoading();

            const response = await fetch('/techs');
            const data = await response.json();

            dispatch({
                type: GET_TECHS,
                payload: data,
            });
        } catch (err) {
            console.log(err.response.statusText);
            return {
                type: TECHS_ERROR,
                payload: err.response.statusText
            };
        }
    };
};

/**
 * Add Technicians Details
 * @param tech
 * @returns {(function(*): Promise<{payload: string, type: string}|undefined>)|*}
 */
export const addTech = (tech) => {
    return async (dispatch) => {
        try {
            setLoading();

            const response = await fetch('techs', {
                method: 'POST',
                body: JSON.stringify(tech),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();

            dispatch({
                type: ADD_TECH,
                payload: data,
            });
        } catch (err) {
            console.log(err.response.statusText);
            return {
                type: TECHS_ERROR,
                payload: err.response.statusText
            };
        }
    };
};

/**
 * Update Technician's Data
 * @param tech
 * @returns {(function(*): Promise<{payload: string, type: string}|undefined>)|*}
 */
export const updateTech = (tech) => {
    return async (dispatch) => {
        try {
            setLoading();

            const response = await fetch(`/techs/${tech.id}`, {
                method: 'PUT',
                body: JSON.stringify(tech),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();

            dispatch({
                type: UPDATE_TECH,
                payload: data,
            });
        } catch (err) {
            return {
                type: TECHS_ERROR,
                payload: err.response.statusText
            };
        }
    };
};

/**
 * Delete Technician's Details
 * @param id
 * @returns {(function(*): Promise<{payload: string, type: string}|undefined>)|*}
 */
export const deleteTech = (id) => {
    return async (dispatch) => {
        try {
            setLoading();

            await fetch(`/techs/${id}`, {
                method: 'DELETE'
            });

            dispatch({
                type: DELETE_TECH,
                payload: id,
            });
        } catch (err) {
            return {
                type: TECHS_ERROR,
                payload: err.response.statusText
            };
        }
    };
};

/**
 * Set Values to Current
 * @param tech
 * @returns {{payload, type: string}}
 */
export const setCurrentTech = (tech) => {
    return {
        type: SET_CURRENT_TECH,
        payload: tech,
    };
};

/**
 * Clear Current Value to null
 * @returns {{type: string}}
 */
export const clearCurrentTech = () => {
    return {
        type: CLEAR_CURRENT_TECH,
    };
};

/**
 * Set Loading to True
 * @returns {{type: string}}
 */
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};

/**
 * Set Tech Modal Status
 * @param status
 * @returns {{payload, type: string}}
 */
export const setTechAddModal = (status) => {
    return {
        type: SET_TECH_MODAL,
        payload: status,
    };
};

/**
 * Set Tech Edit Modal Status
 * @param status
 * @returns {{payload, type: string}}
 */
export const setTechEditModal = (status) => {
    return {
        type: SET_TECH_EDIT_MODAL,
        payload: status,
    };
};
