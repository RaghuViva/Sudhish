import { updateObject } from '../../Shared/utility';
import * as actionTypes from '../ActionTypes';

const initialState = {
    slots: [],
    error: null,
    loading: false,
};

/* -------------Worship List--------------------- */
const getWorshipListSuccess = (state: any, action: any) => {
    return updateObject(state, {
        slots: (action.slots) ? [...state.slots, ...action.slots] : action.slots,
    });
};

const worshipReducer = (state = initialState, action: any) => {
    switch(action.type) {
        /* -------------Worship List--------------------- */
        case actionTypes.GET_WORSHIP_LIST_SUCCESS:
            return getWorshipListSuccess(state, action);

        default:
            return state;
    };
};

export default worshipReducer;