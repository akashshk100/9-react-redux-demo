
const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    if(action.type === 'DECREMENT'){
        return {
            count: state.count - 1
        }
    }
    if(action.type === 'INCREMENT'){
        return {
            count: state.count + 1
        }
    }
    if(action.type === 'ADD'){
        return {
            count: state.count + action.value
        }
    }
    if(action.type === 'SUBSTRACT'){
        return {
            count: state.count - action.value
        }
    }
    return state
}

export default reducer