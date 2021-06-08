import {ADD_TODO,
        EDIT_TODO,
        DELETE_TODO,
        TOGGLE_TODO} from '../action/actionTypes'

const initialState = {
    todo: [
        {
            id: 0,
            text: 'learn react js',
            isComplete: false
        }
    ]

}

const reducer = (state=initialState, action) => {
    switch(action.type){

        case ADD_TODO :{
            return {...state, todo: [...state.todo, action.payload]}
        }

        case EDIT_TODO :{
            return {
                    ...state, todo : state.todo.map(el=>el.id===action.payload.id ? el=action.payload: el)
                }
        }

        case DELETE_TODO :{
            return {
                    ...state, todo: state.todo.filter(el=>el.id!==action.payload)
                }
        }

        case TOGGLE_TODO :{
            return {
                ...state, todo: state.todo.map(el=>el.id===action.payload? {...el, isComplete: !el.isComplete}: el)
            }
        }


        default:
            return state
    }
}
export default reducer