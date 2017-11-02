import types from './types';
import todoData from '../helper/dummy_data';

export function getAll() {

    //Make network request eg.axios call

    return {
        type: types.GET_ALL_TODOS,
        payload: todoData
    }
}