import { ADD_NOTE, CHANGE_DATE } from './ActionsType';

// Add note
export const addNote = (payload) => {
    return {
        type: ADD_NOTE,
        payload
    }
};

// Changing selected date
export const changeDate = (payload) => {
    return {
        type: CHANGE_DATE,
        payload
    }
}