import { ADD_LOG, DELETE_LOG, GET_LOGS, LOGS_ERROR, SET_LOADING } from "./types";

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
            console.error(err.response.message);
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.message
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
                payload: err.response.data,
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
                method: 'DELETE'
            });

            dispatch({
                type: DELETE_LOG,
                payload: id,
            });
        } catch (err) {
            console.error(err.response.message);
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.message
            });
        }
    }
}

/**
 * Set Loading to True
 * @returns {{type: string}}
 */
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
