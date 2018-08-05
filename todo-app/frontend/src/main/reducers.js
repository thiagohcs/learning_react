import { combineReducers } from 'redux'

const rootReducer = combineReducers ({
    todo: () => ({
        _id: 1,
        desciption: 'Ler livro',
        done: true
    }, {
        _id: 2,
        desciption: 'Reunão',
        done: false
    }, {
        _id: 3,
        desciption: 'Consulta médica',
        done: false
    })
})

export default rootReducer