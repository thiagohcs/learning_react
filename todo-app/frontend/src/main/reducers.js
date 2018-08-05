import { combineReducers } from 'redux'

const rootReducer = combineReducers ({
    todo: () => ({
        description: 'Andar de bike',
        list: [{
            _id: 1,
            description: 'Ler livro',
            done: true
        }, {
            _id: 2,
            description: 'Reunão',
            done: false
        }, {
            _id: 3,
            description: 'Consulta médica',
            done: false
        }]
    })
})

export default rootReducer