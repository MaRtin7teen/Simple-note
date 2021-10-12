import { loadData, saveData } from "../Utils/LocalStorage";
import { ADD_NOTE, CHANGE_DATE } from "./ActionsType";

const initState = {
    selected: false,
    notes: loadData("notes") || [],
};

export const Reducer = (state = initState, {type, payload}) => {
    switch(type) {
        case CHANGE_DATE: {
            return {
                ...state,
                selected: payload
            }
        }
        case ADD_NOTE: {
            saveData("notes", [...state.notes, payload]);
            return {
                ...state,
                notes: [...state.notes, payload]
            }
        }
        default: {
            return state;
        }
    }
}