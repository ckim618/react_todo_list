import types from '../actions/types';

const DEFAULT__STATE = { all: [] };

export default (state = DEFAULT__STATE, action) => {
    switch (action.type) {
        case types.GET_ALL_TODOS:
            return { all: action.payload };
        default: return state;
    }
};