import { GET_LOGS, LOGS_ERROR, SET_LOADING } from "./types";

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
 * Set Loading to True
 * @returns {{type: string}}
 */
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
