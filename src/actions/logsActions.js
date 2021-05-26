import { ADD_LOG, CLEAR_CURRENT, DELETE_LOG, GET_LOGS, LOGS_ERROR, SEARCH_LOGS, SET_CURRENT, SET_LOADING, SET_MODAL, UPDATE_LOG } from "./types";

/**
 * Get Logs from Server
 * @returns {(function(*): Promise<void>)|*}
 */
export const getLogs = () => { // Can be export const getLogs = () => async (dispatch) => { ||| For shorter code
    return async (dispatch) => {
        try {
            setLoading();

            const response = await fetch('/logs');
            const data = await response.json();

            dispatch({
                type: GET_LOGS,
                payload: data,
            });
        } catch (err) {
            console.error(err.response.statusText);
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.statusText
            });
        }
    };
};

/**
 * Add Log Action
 * @param log
 * @returns {(function(*): Promise<void>)|*}
 */
export const addLog = (log) => {
    return async (dispatch) => {

        try {
            setLoading();

            const response = await fetch('/logs', {
                method: 'POST',
                body: JSON.stringify(log),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();

            dispatch({
                type: ADD_LOG,
                payload: data,
            });
        } catch (err) {
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.statusText,
            });
        }
    };
};

/**
 * Delete Log
 * @param id
 * @returns {(function(*): Promise<void>)|*}
 */
export const deleteLog = (id) => {
    return async (dispatch) => {
        try {
            setLoading();

            await fetch(`/logs/${id}`, {
                method: 'DELETE',
            });

            dispatch({
                type: DELETE_LOG,
                payload: id,
            });
        } catch (err) {
            console.error(err.response.statusText);
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.statusText
            });
        }
    };
};

/**
 * Update the log details
 * @param log
 * @returns {(function(*): Promise<void>)|*}
 */
export const updateLog = (log) => {
    return async (dispatch) => {
        try {
            setLoading();

            const response = await fetch(`/logs/${log.id}`, {
                method: 'PUT',
                body: JSON.stringify(log),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            dispatch({
                type: UPDATE_LOG,
                payload: data,
            });
        } catch (err) {
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.statusText,
            });
        }
    };
};

export const searchLogs = (query) => {
    return async (dispatch) => {
        try {
            setLoading();

            const response = await fetch(`/logs?q=${query}`);
            const data = await response.json();

            dispatch({
                type: SEARCH_LOGS,
                payload: data,
            });
        } catch (err) {
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.statusText,
            });
        }
    };
};

/**
 * Set Values to Current
 * @param log
 * @returns {{payload, type: string}}
 */
export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log,
    };
};

/**
 * Clear Current Value to null
 * @returns {{type: string}}
 */
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
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
 * Set Modal Status to True
 * @returns {{type: string}}
 */
export const setModal = (status) => {
    return {
        type: SET_MODAL,
        payload: status,
    };
};
