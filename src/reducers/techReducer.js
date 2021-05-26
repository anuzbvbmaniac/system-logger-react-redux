import { ADD_TECH, CLEAR_CURRENT_TECH, DELETE_TECH, GET_TECHS, SET_CURRENT_TECH, SET_LOADING, SET_TECH_EDIT_MODAL, SET_TECH_MODAL, UPDATE_TECH } from "../actions/types";

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
        case UPDATE_TECH:
            return {
                ...state,
                techs: state.techs.map(tech => tech.id === action.payload.id ? action.payload : tech),
                loading: false
            };
        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload),
                loading: false,
            };
        case SET_CURRENT_TECH:
            return {
                ...state,
                current: action.payload,
            };
        case CLEAR_CURRENT_TECH:
            return {
                ...state,
                current: null,
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
        case SET_TECH_EDIT_MODAL:
            return {
                ...state,
                showEditModal: action.payload,
            };
        default:
            return state;
    }
};

export default techReducer;
