import { ADD_TECH, GET_TECHS, SET_LOADING, SET_TECH_MODAL } from "../actions/types";

const initialState = {
    techs: null,
    current: null,
    loading: false,
    error: null,
    showAddModal: false,
    showEditModal: false,
};

const techReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false,
            };
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SET_TECH_MODAL:
            return {
                ...state,
                showAddModal: action.payload,
            };
        default:
            return state;
    }
};

export default techReducer;
