import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {

    return (dispatch, getState) => {
        let description = getState().todo.description
        let search = description ? `&description__regex=/${description}/`: ''
        
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(result => dispatch({ type: 'TODO_SEARCHED', payload: result.data }))
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(result => dispatch(clear()))
            .then(result => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(result => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(result => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(result => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR',  }, search()]
}