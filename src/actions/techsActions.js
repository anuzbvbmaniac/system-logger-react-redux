import { ADD_TECH, GET_TECHS, SET_LOADING, SET_TECH_MODAL, TECHS_ERROR } from "./types";

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
