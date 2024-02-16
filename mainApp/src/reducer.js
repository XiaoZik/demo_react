import {combineReducers} from 'redux';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {...state, counter: state.counter+1};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    globalValues: reducer
})

export default rootReducer;