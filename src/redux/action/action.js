import {ADD_TODO,EDIT_TODO, DELETE_TODO, TOGGLE_TODO} from './actionTypes'

export const add_todo = (newtodo) =>{
    return {
        type: ADD_TODO,
        payload: newtodo

    }
}

export const edit_todo = ( editable) =>{
    return {
        type: EDIT_TODO,
        payload: editable

    }
}

export const delete_todo = (id) =>{
    return {
        type: DELETE_TODO,
        payload: id

    }
}

export const toggle_todo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
     
    }
}
