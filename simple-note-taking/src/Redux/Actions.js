import { ADD_NOTE, CHANGE_DATE } from './ActionsType';

export const addTodo = (payload) => {
    return {
        type: ADD_NOTE,
        payload
    }
};

export const changeDate = (payload) => {
    return {
        type: CHANGE_DATE,
        payload
    }
}